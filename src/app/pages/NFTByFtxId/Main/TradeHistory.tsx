import { NftTradeHistory } from 'app/components/NftTradeHistory/NftTradeHistory';
import { useNftDetails } from 'app/pages/SecondaryMarket/NFTDetails/useNftDetails';

export const TradeHistory = ({ ftxId }: TradeHistoryProps) => {
  const { isTradeHistoryLoading, nftTradeHistory } = useNftDetails(ftxId);

  return <NftTradeHistory isLoading={isTradeHistoryLoading} tradeHistoryRecords={nftTradeHistory} />;
};

interface TradeHistoryProps {
  ftxId: string;
}
