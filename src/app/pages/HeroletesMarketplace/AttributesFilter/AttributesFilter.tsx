import React from 'react';
import { Button, MenuItem, Typography } from '@material-ui/core';
import { InputSelect } from 'app/components/Select/InputSelect';
import { attributes } from 'app/constants/heroletes/attributes';
import { useAttributesFilter } from './useAttributesFilter';
import styles from './AttributesFilter.module.scss';

export const AttributesFilters = () => {
  const { handleSubmit, onSubmit, clearForm, control } = useAttributesFilter();

  return (
    <div style={{ padding: '1rem', backgroundColor: '#161616', marginTop: '0.5rem' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Filter by:</Typography>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Athlete"
          name="athlete"
          control={control}
        >
          {React.Children.toArray(
            attributes.athletes.map(athlete => (
              <MenuItem key={athlete} value={athlete}>
                {athlete}
              </MenuItem>
            ))
          )}
        </InputSelect>
        <InputSelect className={styles.attributesFilter__select} label="Sport" name="sport" control={control}>
          {React.Children.toArray(
            attributes.sports.map(sport => (
              <MenuItem key={sport} value={sport}>
                {sport}
              </MenuItem>
            ))
          )}
        </InputSelect>
        <InputSelect className={styles.attributesFilter__select} label="Tier" name="tier" control={control}>
          {React.Children.toArray(
            attributes.tiers.map(tier => (
              <MenuItem key={tier} value={tier}>
                {tier}
              </MenuItem>
            ))
          )}
        </InputSelect>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Background"
          name="background"
          control={control}
        >
          {React.Children.toArray(
            attributes.backgrounds.map(background => (
              <MenuItem key={background} value={background}>
                {background}
              </MenuItem>
            ))
          )}
        </InputSelect>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Signed"
          name="signed"
          control={control}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </InputSelect>
        <div className={styles.attributesFilter__buttons}>
          <Button variant="outlined" onClick={clearForm}>
            Reset
          </Button>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
};
