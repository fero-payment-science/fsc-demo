import { differenceInDays, subDays } from 'date-fns';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

export const getlastSeen = (epoch: number, daysAgo: number) => {
  // compare SEON(epoch) and AKATA's(daysAgo) lastSeen values - return the latest;
  const epochMultiplied = epoch * 1000;
  const epochInDays = differenceInDays(new Date(), new Date(epochMultiplied));
  const lowestValue = Math.min(daysAgo, epochInDays);
  return subDays(new Date(), lowestValue);
};

export const getStatusIcon = (
  check: boolean | null,
  size: number,
  className?: string,
) => {
  if (check === null) {
    return (
      <BsQuestionCircleFill
        size={size}
        color="#9a9fa5"
        className={className ?? ''}
      />
    );
  } else if (check) {
    return (
      <IoIosCheckmarkCircle
        size={size}
        color="var(--fero-primary)"
        className={className ?? ''}
      />
    );
  } else {
    return (
      <TiDelete size={size} color="var(--danger)" className={className ?? ''} />
    );
  }
};
