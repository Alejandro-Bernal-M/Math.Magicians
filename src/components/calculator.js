function Calculator() {
  const btnValues = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  function setColor(element) {
    const oranges = ['÷', 'x', '-', '+', '='];
    return oranges.includes(element) ? 'orange' : 'gray';
  }

  return (
    <div className="calculator">
      <div className="result">
        0
      </div>
      <div className="calculator-btn">
        {btnValues.map((btn) => (
          <div
            className={`btn ${btn === 0 ? 'double' : ''} ${setColor(btn)}`}
            key={btn}
          >
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
