import { format } from 'date-fns';

import { getStatusIcon } from '../../_modules/helpers';

export const formatDate = (date: number | Date, dateOnly?: boolean): string => {
  const formatString = dateOnly ? 'do MMMM yyyy' : 'do MMM yyyy, HH:MM';
  return format(new Date(date), formatString);
};

export const ListItem = ({
  name,
  content,
  contentClassName,
}: {
  name: string;
  content: string;
  contentClassName?: string;
}) => (
  <p className={'font-semibold !w-[250px] text-left my-[4px]'}>
    {name}:{' '}
    <span className={`font-light ${contentClassName ?? ''}`}>{content}</span>
  </p>
);

export const ListItemStatus = ({
  name,
  statusValue,
  iconSize,
  className,
}: {
  name: string;
  statusValue: boolean | null;
  iconSize: number;
  className?: string;
}) => {
  return (
    <p className={'font-semibold !w-[250px] text-left my-0 flex items-center'}>
      {name}:{' '}
      <span className="font-light">
        {getStatusIcon(statusValue, iconSize, className)}
      </span>
    </p>
  );
};
