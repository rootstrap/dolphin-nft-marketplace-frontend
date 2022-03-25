import React, { useContext, useState } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { InputText } from 'app/components/InputText/InputText';
import { BaseModal } from 'app/components/Modal/Modal';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { ProfileContext } from '../ProfilePage';
import styles from './EditProfile.module.scss';

export const EditProfile = () => {
  const {
    errors,
    handleCloseEditProfile,
    handleSubmit,
    isEditProfileLoading,
    isEditProfileOpen,
    onSubmit,
    register,
    setValue,
  } = useContext(ProfileContext);
  const { avatars } = useAppSelector(state => state.user);
  const [imageSelectedSrc, setImageSelectedSrc] = useState('');

  return (
    <BaseModal open={isEditProfileOpen} handleClose={handleCloseEditProfile}>
      <form className={styles.edit} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.edit__title}>
          <Typography variant="h4">Edit your information</Typography>
        </div>

        <div className={styles.edit__input}>
          <InputText
            className={styles.edit__inputField}
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName}
            size="small"
          />
          <InputText
            className={styles.edit__inputField}
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName}
            size="small"
          />
        </div>
        <div className={styles.edit__input}>
          <InputText
            className={styles.edit__inputField}
            label="Twitter"
            name="twitterUrl"
            register={register}
            error={errors.twitterUrl}
            size="small"
          />
          <InputText
            className={styles.edit__inputField}
            label="Discord"
            name="discordUrl"
            register={register}
            error={errors.discordUrl}
            size="small"
          />
        </div>

        <div className={styles.edit__avatars}>
          <Typography>Select your avatar</Typography>
          <Grid container>
            {React.Children.toArray(
              avatars.map(({ src, alt }) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  onClick={() => {
                    setImageSelectedSrc(src);
                    setValue('avatarImg', src);
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    style={{ border: src === imageSelectedSrc ? '2px solid #35aed7' : 'none' }}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>

        <div className={styles.edit__buttons}>
          <Button
            onClick={handleCloseEditProfile}
            disabled={isEditProfileLoading}
            endIcon={isEditProfileLoading && <CircularProgress />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isEditProfileLoading}
            endIcon={isEditProfileLoading && <CircularProgress />}
          >
            Save
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};
