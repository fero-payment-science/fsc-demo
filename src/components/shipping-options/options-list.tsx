import Image from "next/image";
import { useCheckout } from "../../contexts/checkout-context";
import { cn } from "../../lib/utils";
import spinner from "../../../public/loaders/spinner-grey.svg";
const ListItem = ({ rate }: { rate: ShippingRate }) => {
  const { selectedShipping, setSelectedShipping } = useCheckout();
  // const selected:boolean = false;
  const selected: boolean = selectedShipping?.rate_id === rate.rate_id;
  return (
    <div
      data-testid="list-item"
      onClick={() => {
        setSelectedShipping(rate);
      }}
      className={cn(
        "h-[60px] w-full flex items-center justify-between px-4 gap-4 rounded-sm cursor-pointer m-0 bg-white",
        selected ? "bg-[#efefef]" : ""
      )}
    >
      <div className="flex items-center gap-4">
        <div className="min-h-[20px] min-w-[20px] rounded-full border border-[#979797] flex items-center justify-center">
          {selected && (
            <div
              className={cn(
                "min-h-[14px] min-w-[14px] rounded-full border-[5px] border-[#242424] relative"
              )}
            />
          )}
        </div>
        <p className="text-sm">{rate.label}</p>
      </div>
      <p className="text-sm">{rate.total}€</p>
    </div>
  );
};

export default function OptionsList({
  availableMethods,
  loading,
}: {
  availableMethods: ShippingRate[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <Image
        alt={"loader"}
        data-testid="loader"
        className="!h-[40px]"
        src={spinner}
        height={40}
        width={40}
      />
    );
  }

  if (availableMethods.length === 0) {
    return (
      <h4 data-testid="options-empty" className="text-sm">
        NO SHIPPING METHODS AVAILABLE IN YOUR LOCATION
      </h4>
    );
  }

  return availableMethods.map((item: ShippingRate) => (
    <ListItem key={item.rate_id} rate={item} />
  ));
}
