import { useMyCollection } from './useMyCollection';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { CollectionList } from './CollectionList';
import styles from './MyCollection.module.scss';

export const MyCollectionNfts = () => {
  const { nfts, isLoading } = useMyCollection();

  return (
    <div className={styles.myCollection}>
      {isLoading ? (
        <div className={styles.myCollection__spinner}>
          <CustomLoader />
        </div>
      ) : (
        <CollectionList nfts={nfts} />
      )}
    </div>
  );
};
