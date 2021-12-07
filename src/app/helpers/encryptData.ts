import { ICardDetails, IDeposit, IEncryptedValue } from 'app/interfaces/encryption/encryption';
import { createMessage, encrypt, readKey } from 'openpgp';

export const encryptData = async (
  publicKey: string,
  keyId: string,
  dataToEncrypt: ICardDetails | IDeposit
): Promise<IEncryptedValue> => {
  const decodedPublicKey = await readKey({
    armoredKey: Buffer.from(publicKey, 'base64').toString('binary'),
  });
  const message = await createMessage({
    text: JSON.stringify(dataToEncrypt),
  });

  return encrypt({
    message,
    encryptionKeys: decodedPublicKey,
  }).then(ciphertext => ({
    encryptedData: Buffer.from(ciphertext, 'binary').toString('base64'),
    keyId,
  }));
};
