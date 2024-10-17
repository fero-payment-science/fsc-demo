// import Chart from 'react-apexcharts';
'use client';
import dynamic from 'next/dynamic';

import type { ApexOptions } from './types';

const Chart = dynamic(() => import('react-apexcharts'));
export default function RadialGauge({ percent }: { percent: number }) {
  const radialOptions: ApexOptions = {
    series: [percent],
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: true,
        speed: 300,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
          stroke: {
            lineCap: 'round',
            width: 60,
          },
        },
        hollow: {
          size: '20%',
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'solid',
      colors:
        percent < 60 ? ['#38B45F'] : percent < 80 ? ['#e27602'] : ['#d00000'],
    },
  };
  return (
    <div className="pointer-events-none">
      <Chart options={radialOptions} series={[percent]} type="radialBar" />
    </div>
  );
}
