'use client';
import './radial-gague.css';

import CountUp from 'react-countup';

const circum = 2 * Math.PI * 80;
const getDashOffset = (percentageInput: number) =>
  Math.round(circum - (percentageInput / 100) * circum);

export default function RadialGague({
  percent,
  duration,
}: {
  percent: number;
  duration: number;
}) {
  const colorVals = {
    green: '#38B45F',
    orange: '#fcba03',
    red: '#fc0303',
  };

  const colorVal =
    percent >= 80
      ? colorVals.red
      : percent >= 65
        ? colorVals.orange
        : colorVals.green;

  return (
    <div>
      <div id="gagueContainer">
        <div className="outer">
          <div className="inner" />

          <p id="percent" style={{ color: colorVal }}>
            <CountUp duration={duration / 1000} start={0} end={percent} />%
          </p>
        </div>
        <svg
          className="bar"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="200px"
          height="200px"
        >
          <style>
            {`
                @keyframes circleFill_${percent}{
                    100%{ stroke-dashoffset: ${String(getDashOffset(percent))}};
                }

                .circle_${percent} {
                    fill: none;
                    stroke-width: 40px;
                    stroke: ${colorVal};
                    stroke-dasharray: ${String(getDashOffset(0))};
                    stroke-dashoffset: 455;
                    animation: circleFill_${percent} ${duration}ms ease-out forwards;
                }`}
          </style>
          <circle
            cx="100px"
            cy="100px"
            r="80"
            className={`circle_${percent}`}
          />
        </svg>
      </div>
    </div>
  );
}
