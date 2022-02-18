import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core';
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from '@material-ui/icons';
import { dolphinServiceLinks } from 'app/constants/constants';
import { irlItems } from 'app/constants/heroletes/irlItems';
import IRLDetails from 'app/assets/IRLDetails.png';
import useTranslation from 'app/hooks/useTranslation';
import styles from './LegalDropDown.module.scss';

export const LegalDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const t = useTranslation();

  const handleOnClick = () => setIsDropDownOpen(!isDropDownOpen);

  return (
    <Accordion className={styles.dropdown}>
      <AccordionSummary onClick={handleOnClick}>
        <header className={styles.dropdown__header}>
          <Typography variant="h4">{t('heroletes.sweepstakes.title')}</Typography>
          {isDropDownOpen ? (
            <ArrowDropUpOutlined className={styles.dropdown__headerArrow} />
          ) : (
            <ArrowDropDownOutlined className={styles.dropdown__headerArrow} />
          )}
        </header>
      </AccordionSummary>

      <AccordionDetails>
        <div>
          <div className={styles.dropdown__article}>
            <Typography variant="body1">{t('heroletes.sweepstakes.article')}</Typography>
          </div>

          <div className={styles.dropdown__items}>
            <Grid container>
              <Grid item md={6} lg={6} className={styles.dropdown__itemsContainer}>
                <Typography className={styles.dropdown__itemsDetails} variant="h6">
                  {t('heroletes.sweepstakes.item.title')}
                </Typography>
                <img src={IRLDetails} alt="" />
                <Typography className={styles.dropdown__itemsDescription}>
                  {t('heroletes.sweepstakes.item.description')}
                </Typography>
              </Grid>
              {irlItems.map(({ title, number, description }) => (
                <Grid item md={6} lg={6} className={styles.dropdown__itemsContainer}>
                  <Typography className={styles.dropdown__itemsTitle} variant="h6">
                    {title}
                  </Typography>
                  <Typography className={styles.dropdown__itemsNumber} variant="h6">
                    {number}
                  </Typography>
                  <Typography className={styles.dropdown__itemsDescription}>{description}</Typography>
                </Grid>
              ))}
            </Grid>
          </div>

          <div className={styles.dropdown__article}>
            <Typography className={styles.dropdown__articleTitle} variant="h6">
              {t('heroletes.sweepstakes.item.title')}
            </Typography>
            <Typography className={styles.dropdown__articleDescription} variant="body1">
              {t('heroletes.sweepstakes.dropdown.description')}
            </Typography>

            <Typography className={styles.dropdown__articleTitle} variant="h6">
              {t('heroletes.sweepstakes.dropdown.title')}
            </Typography>
            <Typography className={styles.dropdown__articleDescription} variant="body1">
              {t('heroletes.sweepstakes.dropdown.secondDescription')}
            </Typography>
          </div>

          <div className={styles.dropdown__legal}>
            {t('heroletes.legal')}
            <a href={dolphinServiceLinks.sweepstakesRules} target="_blank" rel="noopener noreferrer">
              {t('heroletes.sweepstakes.rules')}
            </a>
            {t('heroletes.sweepstakes.description')}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
