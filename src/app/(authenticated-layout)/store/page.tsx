import StoreHeader from "@/components/store-header";
import BrowserModule from "../../../components/browser-module";
import StepTextContainer from "../../../components/step-text-container";
import { products } from "@/lib/data/products";
import StoreItem from "@/components/store-item";

export default function StorePage() {
  return (
    <div className="w-full h-full grow flex items-center justify-evenly">
      <BrowserModule>
        <StoreHeader />
        <div className="w-full px-10">
          <h1 className="text-xl font-semibold mb-4">All Products</h1>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product: Product) => (
              <StoreItem key={product.id} item={product} />
            ))}
          </div>
        </div>
      </BrowserModule>
      <StepTextContainer productSelection />
    </div>
  );
}
