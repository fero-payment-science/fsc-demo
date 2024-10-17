/* eslint-disable @typescript-eslint/naming-convention */
import { MdMenuOpen } from 'react-icons/md';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { TooltipWrapper } from '@/components/ui/tooltip/tooltip';
import { useUpstreamData } from '@/contexts/upstream-data-context';

import { getlastSeen } from '../../_modules/helpers';
import { formatDate, ListItem, ListItemStatus } from './helpers';

export default function EmailDataModal() {
  const {
    upstreamData: {
      email_details: {
        history: { last_seen: emailLastSeenSeon },
        domain_details: {
          tld,
          domain,
          created,
          expires,
          updated,
          disposable,
          registrar_name,
          website_exists,
        },
      },
      eam: { date_first_seen: emailFirstSeen },
      'primary.email.last_seen_days': emailLastSeenDays,
    },
  } = useUpstreamData();

  const emailLastSeen: Date = getlastSeen(emailLastSeenSeon, emailLastSeenDays);

  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <TooltipWrapper
          delayDuration={200}
          side={'bottom'}
          tooltipText="Email details"
        >
          <div className="group border border-white -xs p-1 rounded-sm hover:border-slate-300">
            <MdMenuOpen
              size={25}
              className="relative left-[1px] top-[1px] fill-slate-300 group-hover:fill-slate-500"
            />
          </div>
        </TooltipWrapper>
      </DialogTrigger>
      <DialogContent className="flex flex-col !items-center border gap-y-0">
        <strong className="align-left">Email Details</strong>
        <ListItem
          name={'First Seen'}
          content={formatDate(
            emailFirstSeen !== 'now' ? new Date(emailFirstSeen) : new Date(),
          )}
        />
        <ListItem
          name={'Last Seen'}
          content={formatDate(new Date(emailLastSeen))}
        />
        <strong className="mt-5">Domain</strong>
        <ListItem name={'TLD'} content={tld} />
        <ListItem name={'Domain'} content={domain} />
        <ListItem name={'Created'} content={formatDate(new Date(created))} />
        <ListItem name={'Expires'} content={formatDate(new Date(expires))} />
        <ListItem name={'Updated'} content={formatDate(new Date(updated))} />
        <ListItemStatus
          name={'Disposable'}
          statusValue={disposable}
          iconSize={25}
          className={'ml-1'}
        />
        <ListItem name={'Registrar name'} content={registrar_name} />
        <ListItemStatus
          name={'Website exists'}
          statusValue={website_exists}
          iconSize={22}
          className={'ml-2'}
        />
      </DialogContent>
    </Dialog>
  );
}
