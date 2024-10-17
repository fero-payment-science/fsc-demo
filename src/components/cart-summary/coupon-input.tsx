import spinner from "../../../assets/images/loaders/spinner-grey.svg";
import { useEffect, useState } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";
import { escapeQuotes } from "../../lib/utils";
export default function CouponInput() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [appliedCoupons, setAppliedCoupons] = useState<string[]>([]);
  const { applyCoupon } = useDispatch("wc/store/cart");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    try {
      const couponResponse = await applyCoupon(inputValue);
      console.log({ couponResponse });
      setAppliedCoupons([...appliedCoupons, inputValue]);
    } catch (error) {
      console.log({ error });
      const err = error as { message: string };
      setError(err.message);
    }
    setInputValue("");
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-[10px] mt-[30px]"
      >
        <div className="input-wrapper">
          <input
            className="w-full h-[55px]"
            onChange={handleChange}
            value={inputValue}
            placeholder="Discount code or gift card"
            type="text"
            id="text-input"
            role="textinput"
          />
        </div>
        <button
          disabled={inputValue === ""}
          type="submit"
          className="h-[55px] w-[80px] flex justify-center items-center bg-[#dfdede] border border-[#cacaca] rounded-sm cursor-pointer"
        >
          {!loading ? (
            <p className="m-0">Apply</p>
          ) : (
            <img className="!h-[40px]" src={spinner} />
          )}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm mt-[10px]">{escapeQuotes(error)}</p>
      )}
    </>
  );
}
