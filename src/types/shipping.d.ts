interface Address {
  address_1: string;
  address_2: string;
  city: string;
  company: string;
  country: string;
  first_name: string;
  last_name: string;
  phone: string;
  postcode: string;
  state: string;
}

declare interface ShippingMethod {
  key: number;
  id: string;
  title: string;
  cost: string;
  description: string;
  min_amount: string;
}

declare interface ShippingRate {
  rate_id: string;
  method_id: string;
  label: string;
  cost: string;
  total: string;
  taxes: string[];
  shipping_tax: number;
  items: { name: string; quantity: number }[];
}
