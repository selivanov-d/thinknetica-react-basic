import PropTypes from 'prop-types';

const CurrencyFormatter = ({ number }) => (
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
);

CurrencyFormatter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default CurrencyFormatter;
