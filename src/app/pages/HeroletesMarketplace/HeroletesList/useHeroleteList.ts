import { useContext, useEffect, useState } from 'react';
import { NFTDetailsContext } from '../Marketplace';

export const useHeroleteList = () => {
  const { setQueryParams, heroletesCount } = useContext(NFTDetailsContext);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const itemsPerPage = 6;

  useEffect(() => {
    setPageCount(Math.ceil(heroletesCount / itemsPerPage));
  }, [heroletesCount, pageOffset]);

  const handlePageClick = (event: any) => {
    setPageOffset(event.selected);
    setQueryParams(currentValue => ({
      ...currentValue,
      startInclusive: event.selected * itemsPerPage,
      endExclusive: event.selected * itemsPerPage + itemsPerPage,
    }));
  };

  return {
    handlePageClick,
    pageCount,
    pageOffset,
  };
};
