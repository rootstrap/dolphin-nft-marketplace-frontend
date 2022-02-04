import { NftTradeHistory } from 'presentation/components/NftTradeHistory/NftTradeHistory';
import { useNftDetails } from 'presentation/pages/SecondaryMarket/NFTDetails/useNftDetails';

export const TradeHistory = ({ ftxId }: TradeHistoryProps) => {
  const { isTradeHistoryLoading, nftTradeHistory } = useNftDetails(ftxId);

  return <NftTradeHistory isLoading={isTradeHistoryLoading} tradeHistoryRecords={nftTradeHistory} />;
};

interface TradeHistoryProps {
  ftxId: string;
}
