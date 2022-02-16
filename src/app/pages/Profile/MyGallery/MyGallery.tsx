import { useMyGallery } from './useMyGallery';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { GalleryList } from './GalleryList';
import styles from './MyGallery.module.scss';

export const MyGallery = () => {
  const { nfts, isLoading } = useMyGallery();

  return (
    <div className={styles.myCollection}>
      {isLoading ? (
        <div className={styles.myCollection__spinner}>
          <CustomLoader />
        </div>
      ) : (
        <GalleryList nfts={nfts} />
      )}
    </div>
  );
};
