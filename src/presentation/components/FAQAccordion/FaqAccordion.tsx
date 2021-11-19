import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { faqCreatures } from 'app/constants/creatures/faqCreatures';
import styles from './FaqAccordion.module.scss';

export const FaqAccordion = () => {
  return (
    <div className={styles.faqAccordion}>
      <Typography gutterBottom variant="h5" className={styles.faqAccordion__title}>
        FAQ
      </Typography>
      {faqCreatures.map(faq => (
        <div className={styles.faqAccordion__item}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddBox color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.faqAccordion__question}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.faqAccordion__answer}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
