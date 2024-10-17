export interface ApexOptions {
  series: number[];
  chart: {
    type: 'radialBar';
    offsetY: number;
    sparkline: {
      enabled: boolean;
    };
    animations: {
      enabled: boolean;
      speed: number;
    };
  };
  plotOptions: {
    radialBar: {
      startAngle: number;
      endAngle: number;
      track: {
        background: string;
        strokeWidth: string;
        margin: number;
        dropShadow: {
          enabled: boolean;
          top: number;
          left: number;
          color: string;
          opacity: number;
          blur: number;
        };
      };
      dataLabels: {
        name: {
          show: boolean;
        };
        value: {
          offsetY: number;
          fontSize: string;
        };
        stroke: {
          lineCap: string;
          width: number;
        };
      };
      hollow: {
        size: string;
      };
    };
  };
  grid: {
    padding: {
      top: number;
    };
  };
  fill: {
    type: string;
    colors: string[];
  };
}
