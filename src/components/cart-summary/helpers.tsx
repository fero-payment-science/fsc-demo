export const formatTotalPrice = (
  totalPrice: number,
  wcShipping: number,
  localShipping: number,
  currency: string
) => {
    const price = totalPrice - wcShipping + localShipping;
    return `${currency}${(price / 100).toFixed(2)}`;
};
export const calculateTotalPrice = (
  totalPrice: number,
  wcShipping: number,
  localShipping: number
) => totalPrice - wcShipping + localShipping;
