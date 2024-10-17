export interface AnalysisDataObject {
  payment_methods: PaymentMethod[];
  abandonment_risk_score: number;
  fraud_risk_score: number;
  tra_exemption: number;
  api_request_id: string;
}
interface RowElement {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
}
export interface DistanceMatrix {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: [
    {
      elements: RowElement[];
    },
  ];
  status: string;
}
