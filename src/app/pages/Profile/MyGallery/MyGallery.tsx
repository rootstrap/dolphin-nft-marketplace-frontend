import { useContext } from 'react';
import { ProfileContext } from '../ProfilePage';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { GalleryList } from './GalleryList';
import styles from './MyGallery.module.scss';

export const MyGallery = () => {
  const { nfts, isLoading } = useContext(ProfileContext);

  if (isLoading)
    return (
      <div className={styles.myCollection__spinner}>
        <CustomLoader />
      </div>
    );

  return (
    <div className={styles.myCollection}>
      <GalleryList nfts={nfts} />
    </div>
  );
};
