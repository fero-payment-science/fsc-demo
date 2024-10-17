/* eslint-disable @typescript-eslint/naming-convention */
'use client';
import { useUpstreamData } from '@/contexts/upstream-data-context';

import AccountData from './_modules/account-data';
import { AttributeAges } from './_modules/attribute-ages';
import GagueModule from './_modules/Gague';
import IpData from './_modules/ip-data';
import UserLocation from './_modules/user-location';
import styles from './data-grid.module.scss';

export default function OurDataPage() {
  const { isLoaded } = useUpstreamData();
  return (
    isLoaded && (
      <>
        <div className={styles.grid}>
          <UserLocation />
          <GagueModule
            className="gague"
            title={'Fraud Risk Score'}
            variant={'fraud'}
          />
          <GagueModule
            className="gague2"
            title={'Abandonment Rate Score'}
            variant={'abandonment'}
          />
          <AttributeAges />
          <IpData />
          <AccountData />
        </div>
      </>
    )
  );
}
