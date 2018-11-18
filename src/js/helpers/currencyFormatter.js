export default function currencyFormatter(number) {
  if (Number.isNaN(+number)) return '--';
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number);
}
