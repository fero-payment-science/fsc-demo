import CircleTick from "../util-comps/circle-tick";

export default function AddToCartBtn({
  handleAddItem,
  isInCart,
}: {
  handleAddItem: () => void;
  isInCart: boolean;
}) {
  return (
    <div
      onClick={handleAddItem}
      className="flex justify-center items-center h-[40px] bg-black text-white text-center px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-indigo-700"
    >
      {!isInCart ? "Add to cart" : <CircleTick height={30} width={30} />}
    </div>
  );
}
