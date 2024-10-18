import type React from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  tooltipText: string;
  side: 'top' | 'right' | 'bottom' | 'left';
  delayDuration: number;
}
