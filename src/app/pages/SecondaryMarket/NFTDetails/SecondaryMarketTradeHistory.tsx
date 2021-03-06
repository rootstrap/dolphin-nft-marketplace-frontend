import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import { NftTradeHistory } from 'app/components/NftTradeHistory/NftTradeHistory';

export const SecondaryMarketTradeHistory = () => {
  const { nftTradeHistory, isTradeHistoryLoading } = useContext(NFTDetailsContext);

  return <NftTradeHistory isLoading={isTradeHistoryLoading} tradeHistoryRecords={nftTradeHistory} />;
};
