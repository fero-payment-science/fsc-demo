declare interface TransactionAnalysisBody {
    customer: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      first_registered: string;
      ip_address: string;
      device_id: string;
      user_agent: string;
    };
    order: {
      order_id: string;
      currency: string;
      amount: number;
    };
    address: {
      line_1: string;
      line_2: string;
      city: string;
      country: string;
      postal_code: string;
    };
  }
  