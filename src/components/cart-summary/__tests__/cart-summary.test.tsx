import { render, screen } from "@testing-library/react";
import CartSummary from "../index";
import { mockCartData } from "../../../__mocks__/mock-cart-data";
import { formatAmount } from "../../../lib/utils";

  
describe("CartSummary", () => {
  beforeEach(() => {
    render(<CartSummary />);
  });

  it("renders without crashing", () => {
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
  });

  it('renders the CouponInput component', () => {
    const couponPlaceholder = "Discount code or gift card";
    expect(screen.getByPlaceholderText(couponPlaceholder)).toBeInTheDocument();
  });

  it("renders CartItem component for all items in cart", () => {
    expect(screen.getAllByRole("listitem")).toHaveLength(
      mockCartData.items.length
    );
  });

  it("renders the correct total price", () => {
    const totalText = formatAmount(
      +mockCartData.totals.total_items,
      mockCartData.totals.currency_symbol
    );
    expect(screen.getByText(totalText)).toBeInTheDocument();
  });

  //   it('calls removeCoupon when handleRemoveCoupon is called', () => {
  //     render(<CartSummary />);
  //     // Assuming there's a button or some clickable element in CartItem to remove the coupon
  //     const removeButton = screen.getByRole('button', { name: /remove coupon/i });
  //     userEvent.click(removeButton);
  //     expect(mockRemoveCoupon).toHaveBeenCalled();
  //   });
});
