const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const formatPrice = (number) => formatter.format(number);

export default formatPrice;
