import PropTypes from 'prop-types';
import calculate from './logic/calculate';

function setColor(element) {
  const oranges = ['÷', 'x', '-', '+', '='];
  return oranges.includes(element) ? 'orange' : 'gray';
}

function Btn({
  content, setValue, setTotal, totalObj,
}) {
  function allToCall() {
    setValue(content);
    setTotal(calculate(totalObj, content));
  }
  return (
    <button
      onClick={allToCall}
      type="button"
      className={`btn ${content === '0' ? 'double' : ''} ${setColor(content)}`}
    >
      {content}
    </button>
  );
}

Btn.propTypes = {
  content: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
  totalObj: PropTypes.instanceOf(Object).isRequired,
};

export default Btn;
