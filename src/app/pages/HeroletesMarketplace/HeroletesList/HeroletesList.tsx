import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { MarketplaceContext } from '../Marketplace';
import { HeroleteItem } from '../HeroleteItem/HeroleteItem';
import { useHeroleteList } from './useHeroleteList';
import ReactPaginate from 'react-paginate';
import styles from './HeroletesList.module.scss';
import './HeroletesList.css';

export const HeroletesList = () => {
  const { heroletes, isLoading } = useContext(MarketplaceContext);
  const { handlePageClick, pageCount, pageOffset } = useHeroleteList();

  return (
    <div className={styles.heroletesList}>
      <Grid container>
        {isLoading ? (
          <CustomLoader />
        ) : (
          React.Children.toArray(
            heroletes?.map(herolete => (
              <Grid item xs={6} lg={4} style={{ padding: '0.5rem' }}>
                <HeroleteItem
                  animation={herolete.animationUrl}
                  background={herolete.attributes.Background}
                  collection={herolete.collection}
                  currency={herolete.quoteCurrency}
                  id={herolete.id}
                  name={herolete.attributes.Athlete}
                  price={herolete.offerPrice}
                  sport={herolete.attributes.Sport}
                  tier={herolete.attributes.Tier}
                />
              </Grid>
            ))
          )
        )}
      </Grid>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          previousLabel="< previous"
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          forcePage={pageOffset}
          className={styles.heroletesList__paginator}
        />
      </div>
    </div>
  );
};
