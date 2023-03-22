import PropTypes from 'prop-types';

function Output({ totalObj, value }) {
  const toShow = (obj) => {
    const signs = ['÷', 'x', '-', '+', '=', '%'];
    if (signs.includes(value) && value !== '=') {
      return value;
    }
    if (!obj.total && !obj.next) {
      return '0';
    }
    if (obj.next && !obj.total) {
      return obj.next;
    }
    if (!obj.next && obj.total) {
      return obj.total;
    }
    if (obj.next && obj.total) {
      return obj.next;
    }
    return obj.total;
  };
  return (
    <div className="result">
      <span>{ toShow(totalObj) }</span>
    </div>
  );
}

Output.propTypes = {
  totalObj: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.string.isRequired,
};

export default Output;
