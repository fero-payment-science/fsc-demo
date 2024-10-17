'use client';
import { BsCalendar3 } from 'react-icons/bs';

import { useUpstreamData } from '@/contexts/upstream-data-context';

import { formatDate } from '../_components/account-modal/helpers';
import DashModule from '../_components/dash-module';
import { getlastSeen } from './helpers';

export function AttributeAges() {
  const {
    upstreamData: {
      ip_details: {
        history: { first_seen: ipFirstSeenSeon, last_seen: ipLastSeenSeon },
      },
      email_details: {
        history: { last_seen: emailLastSeenSeon },
      },
      eam: { date_first_seen: emailFirstSeen },
      'ip.last_seen_days': ipLastSeeDays,
      'primary.email.last_seen_days': emailLastSeenDays,
    },
  } = useUpstreamData();

  const emailLastSeen: Date = getlastSeen(emailLastSeenSeon, emailLastSeenDays);
  const ipLastSeen: Date = getlastSeen(ipLastSeenSeon, ipLastSeeDays);

  return (
    <DashModule title="Attribute Ages" Icon={BsCalendar3} className={'ages'}>
      <p className={'my-1'}>
        <strong>Email first seen:</strong>{' '}
        {formatDate(
          emailFirstSeen !== 'now' ? new Date(emailFirstSeen) : new Date(),
          true,
        )}
      </p>
      <p className={'my-1'}>
        <strong>Email last seen:</strong>{' '}
        {formatDate(new Date(emailLastSeen), true)}
      </p>
      <p className={'my-1'}>
        <strong>IP first seen:</strong>{' '}
        {formatDate(new Date(ipFirstSeenSeon * 1000), true)}
      </p>
      <p className={'my-1'}>
        <strong>IP last seen:</strong> {formatDate(new Date(ipLastSeen), true)}
      </p>
    </DashModule>
  );
}
