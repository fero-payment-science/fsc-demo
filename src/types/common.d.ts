declare interface ChildrenProps {
  children: React.ReactNode;
}

interface CountryObject {
  alpha2: string;
  name: string;
}

declare interface LatLong {
  lat: number;
  lng: number;
}

declare interface PaymentMethod {
  code: string;
  name: Provider;
  type: PaymentType;
}