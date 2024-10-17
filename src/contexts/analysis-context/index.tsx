'use client';
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import API from '@/api';

import type { AnalysisDataObject } from './types';
import { calculateCartTotal } from '../checkout-context/types';
import { useCheckout } from '../checkout-context';

interface AnalysisContextObject {
  analysisData: AnalysisDataObject;
  getAnalysis: (ip: string) => void;
  resetAnalysis: () => void;
  analysisLoaded: boolean;
}

const defaultContext: AnalysisContextObject = {
  analysisData: {} as AnalysisDataObject,
  getAnalysis: (): void => {},
  resetAnalysis: (): void => {},
  analysisLoaded: false,
};

const AnalysisContext = createContext<AnalysisContextObject>(defaultContext);

export const AnalysisProvider = ({ children }: ChildrenProps) => {
  const { email, shippingAddress, basketItems } = useCheckout();
  const [analysisData, setAnalysisData] = useState<AnalysisDataObject>(
    {} as AnalysisDataObject,
  );
  const [analysisLoaded, setAnalysisLoaded] = useState(false);
  const id = uuid();

  const resetAnalysis = () => {
    setAnalysisData(defaultContext.analysisData);
    setAnalysisLoaded(false);
  };

  const getAnalysis = async (ipAddress: string) => {
    try {
      const userDataMutated: TransactionAnalysisBody = {
        address: {
          ...shippingAddress,
          line_1: shippingAddress.address_1,
          line_2: shippingAddress.address_2,
          postal_code: shippingAddress.postcode,
          country: shippingAddress.country,
        },
        customer: {
          first_name: shippingAddress.first_name,
          last_name: shippingAddress.last_name,
          email: email,
          phone: '0123456789',
          first_registered: '2024-01-29',
          ip_address: ipAddress,
          device_id: 'f3406397-7dd5-4041-8e7d-61bbf53fe1c1',
          user_agent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15A5341f Safari/604.1',
        },
        order: {
          amount: +calculateCartTotal(basketItems),
          order_id: id,
          currency: 'EUR',
        },
      };
      const data = await API.getTransactionAnalysis(userDataMutated);

      setAnalysisData(data as AnalysisDataObject);

      setAnalysisLoaded(true);
    } catch (error) {
      console.log('FETCH ERROR: ', error);
    }
  };
  return (
    <AnalysisContext.Provider
      value={{
        analysisData,
        getAnalysis,
        resetAnalysis,
        analysisLoaded,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = (): AnalysisContextObject => {
  return useContext(AnalysisContext);
};
