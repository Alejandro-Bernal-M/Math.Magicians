import Calculator from '../components/calculator';
import styles from '../styles/Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.calculatorDiv}>
    <h2>Let&apos;s do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
