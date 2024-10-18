/* eslint-disable @typescript-eslint/naming-convention */
import { IoWarning } from 'react-icons/io5';

import { Dialog, DialogContent, DialogTrigger } from '@/components/util-comps/dialog';
import { TooltipWrapper } from '@/components/util-comps/tooltip/tooltip';
import { useUpstreamData } from '@/contexts/upstream-data-context';
import type { Breach } from '@/contexts/upstream-data-context/types';
import { cn } from '@/lib/utils';

import { formatDate, ListItem, ListItemStatus } from './helpers';

export default function BreachModal() {
  const {
    upstreamData: {
      email_details: {
        breach_details: {
          breaches,
          first_breach,
          number_of_breaches,
          haveibeenpwned_listed,
        },
      },
    },
  } = useUpstreamData();

  return (
    <Dialog>
      <DialogTrigger>
        <TooltipWrapper
          delayDuration={200}
          side={'bottom'}
          tooltipText={`${breaches?.length ?? '0'} breaches detected`}
        >
          <div className="group border border-white -xs p-1 rounded-sm hover:border-slate-300">
            <IoWarning
              size={23}
              className="relative left-[1px] fill-slate-300 group-hover:fill-slate-500"
            />
          </div>
        </TooltipWrapper>
      </DialogTrigger>

      <DialogContent className="flex flex-col !items-center border gap-y-0 max-h-[calc(100vh-100px)] overflow-auto">
        <strong className="align-left">Breach Details</strong>
        <ListItem
          name={'Breaches Detected'}
          content={String(number_of_breaches)}
          contentClassName={cn(
            'font-semibold',
            breaches?.length > 0 ? 'text-red-500' : 'text-green-500',
          )}
        />
        {breaches?.length > 0 && (
          <ListItem
            name={'First Breach'}
            content={formatDate(new Date(first_breach), true)}
          />
        )}
        <ListItemStatus
          name="havibeenpwnd listed"
          statusValue={haveibeenpwned_listed}
          iconSize={23}
          className="ml-2"
        />
        {breaches?.length > 0 && (
          <>
            <p className="font-semibold w-[250px] mt-3">Breaches:</p>
            {breaches.map((breach: Breach, idx: number) => (
              <div
                key={`${breach.name}_${idx}`}
                className="border-2 border-red-500 rounded-md p-2 !w-[320px] text-left my-[4px] flex flex-col gap-y-1 items-center"
              >
                <p className={'font-semibold text-center'}>
                  {breach.name} ({breach.domain}):{' '}
                </p>
                <span className="font-medium w-full text-center">
                  {formatDate(new Date(breach.date), true)}
                </span>
              </div>
            ))}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
