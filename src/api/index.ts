import * as http from '@/api/http-common';
import { type UpstreamResponseObject } from '@/contexts/upstream-data-context/types';

const API = {
  // T1: Transaction Analysis
  getTransactionAnalysis: async (params: TransactionAnalysisBody) => {
    const options = {
      method: 'post',
      url: '/analysis/',
      data: params,
    };

    const { data, headers } = await http.transaction(options);
    console.log('HEADERS: ', headers);
    return data;
  },

  // T2: List upstream responses
  getUpstreamResponse: async (
    requestId: string,
  ): Promise<UpstreamResponseObject> => {
    const options = {
      method: 'get',
      url: `/upstream-provider-calls/?api_request_id=${requestId}`,
    };

    const { data } = await http.transaction(options);
    return data;
  },

  // T5: Get user IP
  getUserIP: async (): Promise<{ ip_address: string }> => {
    const options = {
      method: 'get',
      url: '/what-is-my-ip/',
    };

    const { data } = await http.transaction(options);
    return data;
  },
  // Google Distance Matrix API
  getDistanceMatrix: async (params: Record<string, string>) => {
    const options = {
      method: 'post',
      url: '/distance-matrix/',
      data: params,
    };

    const { data } = await http.transaction(options);
    return data;
  },
};

export default API;
