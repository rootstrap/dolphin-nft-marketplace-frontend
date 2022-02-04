import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import { NftTradeHistory } from 'presentation/components/NftTradeHistory/NftTradeHistory';

export const SecondaryMarketTradeHistory = () => {
  const { nftTradeHistory, isTradeHistoryLoading } = useContext(NFTDetailsContext);

  return <NftTradeHistory isLoading={isTradeHistoryLoading} tradeHistoryRecords={nftTradeHistory} />;
};
