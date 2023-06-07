export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

export const getDiscountedPrice = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}): number => Number((price * discount) / 100);

export const getCartTotal = (item: any) => {
  const totalAmount = item.reduce((prev: number, current: any, index: number) => prev + (current.price * current.qty), 0)
  return totalAmount;
}