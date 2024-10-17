'use client';
import { TbWorldWww } from 'react-icons/tb';

import { useUpstreamData } from '@/contexts/upstream-data-context';

import DashModule from '../_components/dash-module';
export default function IpData() {
  const {
    upstreamData: {
      ip_details: { isp_name: ispName },
      'ip.risk': ipRisk,
      'ip.connection_type': ipConnectionType,
      ip_details: { ip, city, country },
    },
  } = useUpstreamData();
  return (
    <DashModule title="User IP Address" Icon={TbWorldWww} className={'ip'}>
      <p className={'my-1'}>
        <strong>IP Address:</strong> {ip}
      </p>
      <p className={'my-1'}>
        <strong>Location:</strong> {city} {country}
      </p>
      <p className={'my-1'}>
        <strong>IP Risk:</strong>{' '}
        {ipRisk ? (
          <span className="text-danger font-semibold">IP address is risky</span>
        ) : (
          <span className="text-green-500 font-semibold">IP is not risky</span>
        )}
      </p>
      <p className={'my-1'}>
        <strong>Connection Type:</strong> {ipConnectionType}
      </p>
      <p className={'my-1'}>
        <strong>Registered Organization:</strong> {ispName}
      </p>
    </DashModule>
  );
}
