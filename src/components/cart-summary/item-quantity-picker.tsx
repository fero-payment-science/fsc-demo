import { useState } from "react";
import useCart from "../../hooks/use-cart";

export default function ItemQuantityPicker({
  item: { key: productKey, id: productId },
}: {
  item: CartItem;
}) {
  const { decreaseItemQuantity, increaseItemQuantity, getCurrentQuantity } =
    useCart();
//   const { getProduct } = useProducts();
//   const product = getProduct(productId);
//   const maxQuantity = product?.stock_quantity ?? null;

  const currentQuantity = getCurrentQuantity(productKey);
  const [localQuantity, setLocalQuantity] = useState(currentQuantity);

  const handleMinus = () => {
    setLocalQuantity(localQuantity - 1);
    decreaseItemQuantity(productKey);
  };

  const handlePlus = () => {
    // if (maxQuantity && localQuantity >= maxQuantity) return;
    setLocalQuantity(localQuantity + 1);
    increaseItemQuantity(productKey);
  };

  return (
    <div className="flex items-center rounded-md border bg-white px-2 gap-[12px]">
      <div className="cursor-pointer text-[#888888]" onClick={handleMinus}>
        -
      </div>
      <span>{localQuantity}</span>
      <div className="cursor-pointer text-[#888888]" onClick={handlePlus}>
        +
      </div>
    </div>
  );
}
