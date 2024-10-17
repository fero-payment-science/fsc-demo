/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

import API from '@/api';

import { useAnalysis } from '../analysis-context';
import { type DistanceMatrix } from '../analysis-context/types';
import type { UpstreamResponseObject } from './types';
import { useCheckout } from '../checkout-context';
import { useSessionStorage } from 'usehooks-ts';

interface UpstreamDataContextObject {
  upstreamData: UpstreamResponseObject;
  distanceMatrix: DistanceMatrix;
  isLoaded: boolean;
  resetUpstreamData: () => void;
}

const defaultContext: UpstreamDataContextObject = {
  upstreamData: {} as UpstreamResponseObject,
  distanceMatrix: {} as DistanceMatrix,
  isLoaded: false,
  resetUpstreamData: (): void => {},
};

const UpstreamDataContext =
  createContext<UpstreamDataContextObject>(defaultContext);
export const UpstreamDataProvider = ({ children }: ChildrenProps) => {
  const [distanceMatrix, setDistanceMatrix] = useState<DistanceMatrix>(
    {} as DistanceMatrix,
  );
  const [upstreamData, setUpstreamData] =
    useSessionStorage<UpstreamResponseObject>(
      'upstream-data',
      {} as UpstreamResponseObject,
    );
  const [isLoaded, setLoaded] = useState(false);
  const { shippingAddress } = useCheckout();

  const {
    analysisData: { api_request_id: requestId },
  } = useAnalysis();

  const getMatrix = async (origins: string, lat: number, long: number) => {
    const data = await API.getDistanceMatrix({
      destinations: `${Object.values(shippingAddress)
        .filter((i) => i !== '')
        .join(', ')}|${lat},${long}`,
      origins,
    });
    setDistanceMatrix(data as DistanceMatrix);
  };

  const getAnalysisData = async (requestId: string) => {
    const data = await API.getUpstreamResponse(requestId);
    squashData(data);
  };

  useEffect(() => {
    if(!requestId) return;
    getAnalysisData(requestId);
  }, [requestId]);

  interface ApiResponseItem {
    response: { data: Record<any, any> };
  }

  const squashData = (data: any) => {
    let obj: UpstreamResponseObject = {} as UpstreamResponseObject;
    data.forEach((i: ApiResponseItem) => {
      console.log(i.response);
      if (i.response.data) {
        obj = {
          ...obj,
          ...i.response.data,
        } as unknown as UpstreamResponseObject;
      } else {
        obj = { ...obj, ...i.response } as unknown as UpstreamResponseObject;
      }
    });
    setUpstreamData(obj);
    getMatrix(
      `${obj.ip_details?.city}, ${obj.ip_details?.country}`,
      obj.ip_details?.latitude,
      obj.ip_details?.longitude,
    );
    setLoaded(true);
  };

  const resetUpstreamData = () => {
    setUpstreamData(defaultContext.upstreamData);
    setLoaded(false);
    setDistanceMatrix(defaultContext.distanceMatrix);
  };

  return (
    <UpstreamDataContext.Provider
      value={{ upstreamData, distanceMatrix, isLoaded, resetUpstreamData }}
    >
      {children}
    </UpstreamDataContext.Provider>
  );
};

export const useUpstreamData = (): UpstreamDataContextObject => {
  return useContext(UpstreamDataContext);
};
