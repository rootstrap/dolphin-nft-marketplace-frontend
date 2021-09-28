export const Step = ({ styles, src, alt, textContent }: StepProps) => (
  <div className={styles.knowHowContent__itemText}>
    <p>{textContent}</p>
    <img src={src} alt={alt} />
  </div>
);

interface StepProps {
  styles: any;
  src: string;
  alt: string;
  textContent: string;
}
