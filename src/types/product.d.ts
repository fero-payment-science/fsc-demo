declare interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  sku: string;
  stock_status: string;
  image: string;
  permalink: string;
}

declare interface CartItemData extends Product {
  quantity: number;
}