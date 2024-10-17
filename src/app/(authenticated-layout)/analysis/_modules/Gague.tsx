/* eslint-disable @typescript-eslint/naming-convention */
'use client';
import { IoWarningOutline } from 'react-icons/io5';

import RadialGauge from '@/components/gague';
import { useAnalysis } from '@/contexts/analysis-context';

import DashModule from '../_components/dash-module';

export default function GagueModule({
  className,
  title,
  variant,
}: {
  className: string;
  title: string;
  variant: 'abandonment' | 'fraud';
}) {
  const {
    analysisData: {
      abandonment_risk_score: abandonmentRiskScore,
      fraud_risk_score: fraudRiskScore,
    },
  } = useAnalysis();

  const value =
    variant === 'fraud' ? fraudRiskScore / 5 : abandonmentRiskScore * 100;

  return (
    <DashModule title={title} Icon={IoWarningOutline} className={className}>
      {value ? (
        <RadialGauge duration={600} percent={+value.toFixed(0)} />
      ) : (
        <div className="h-[200px] w-[200px] border mx-auto rounded-full border-slate-200" />
      )}
    </DashModule>
  );
}
