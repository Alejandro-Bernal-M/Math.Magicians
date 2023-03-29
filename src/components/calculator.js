import { useState } from 'react';
import Btn from './btn';
import Output from './output';

function Calculator() {
  const btnValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [value, setValue] = useState('0');
  const initialCalc = {
    total: '0',
    next: null,
    operation: null,
  };
  const [totalObj, setTotal] = useState(initialCalc);

  return (
    <div className="calculator">
      <Output value={value} totalObj={totalObj} />
      <div className="calculator-btn">
        {btnValues.map((btn) => (
          <Btn
            key={btn}
            content={btn}
            setValue={setValue}
            setTotal={setTotal}
            totalObj={totalObj}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
