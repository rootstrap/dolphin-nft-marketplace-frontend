import * as anchor from '@project-serum/anchor';

export const candyMachineConfig = {
  connection: new anchor.web3.Connection('https://api.devnet.solana.com'),
  treasury: new anchor.web3.PublicKey('AfabEY9MxXDWJQM4vAn8CLdCLEMzVK8o89CiMq5gGDkU'),
  config: new anchor.web3.PublicKey('9gKptEZr2uMnMnfPxFUb4VNFLQX81jsfBmipoTrTChHY'),
  candyMachineId: new anchor.web3.PublicKey('bxMV8Stg9qgqaHzPxcLR6BRb2PpKvoPwQXU2ueHMqmE'),
  startDateSeed: 1640883600,
  txTimeout: 30000,
};
