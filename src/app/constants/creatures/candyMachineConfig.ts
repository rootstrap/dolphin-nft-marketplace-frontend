import * as anchor from '@project-serum/anchor';

export const candyMachineConfig = {
  connection: new anchor.web3.Connection('https://api.devnet.solana.com'),
  treasury: new anchor.web3.PublicKey('7VKPHnP2MnahWVAZs7WadH1AWPfGnChS1H6qknEbRPDd'),
  config: new anchor.web3.PublicKey('AMmmmV6mPQzN6SaDShDM4DJVgjbMPUEsc18DGrBK9suv'),
  candyMachineId: new anchor.web3.PublicKey('AkeL6Xne2dF1pwDiKykdHdqrkjJVDmdi6q2vquqsCveH'),
  startDateSeed: 1638378000,
  txTimeout: 30000,
};
