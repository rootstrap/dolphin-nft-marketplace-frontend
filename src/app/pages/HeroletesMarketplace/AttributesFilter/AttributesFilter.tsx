import { Button, MenuItem, Typography } from '@material-ui/core';
import { InputSelect } from 'app/components/Select/InputSelect';
import { attributes } from 'app/constants/heroletes/attributes';
import { useAttributesFilter } from './useAttributesFilter';
import React from 'react';
import styles from './AttributesFilter.module.scss';

export const AttributesFilters = () => {
  const { register, handleSubmit, onSubmit, clearForm } = useAttributesFilter();

  return (
    <div style={{ padding: '1rem', backgroundColor: '#161616', marginTop: '0.5rem' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Filter by:</Typography>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Athlete"
          register={register}
          name="athlete"
        >
          {attributes.athletes.map(athlete => (
            <MenuItem key={athlete} value={athlete}>
              {athlete}
            </MenuItem>
          ))}
        </InputSelect>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Sport"
          register={register}
          name="sport"
        >
          {attributes.sports.map(sport => (
            <MenuItem key={sport} value={sport}>
              {sport}
            </MenuItem>
          ))}
        </InputSelect>
        <InputSelect className={styles.attributesFilter__select} label="Tier" register={register} name="tier">
          {attributes.tiers.map(tier => (
            <MenuItem key={tier} value={tier}>
              {tier}
            </MenuItem>
          ))}
        </InputSelect>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Background"
          register={register}
          name="background"
        >
          {attributes.backgrounds.map(background => (
            <MenuItem key={background} value={background}>
              {background}
            </MenuItem>
          ))}
        </InputSelect>
        <InputSelect
          className={styles.attributesFilter__select}
          label="Signed"
          register={register}
          name="signed"
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
