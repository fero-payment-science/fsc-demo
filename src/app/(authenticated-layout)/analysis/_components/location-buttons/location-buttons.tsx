import { useMap } from '@vis.gl/react-google-maps';
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

import { Button } from '@/components/util-comps/button';
import { TooltipWrapper } from '@/components/util-comps/tooltip/tooltip';
import { useUpstreamData } from '@/contexts/upstream-data-context';

import { isMapFocussed } from '../../helpers';
import type { BtnValues, MapFocus } from '../../types';

export default function LocationButtons({
  buttons,
  currentCenter,
  setMapFocus,
}: {
  buttons: BtnValues[];
  currentCenter: LatLong;
  setMapFocus: (focus: MapFocus) => void;
}) {
  const {
    upstreamData: {
      ip_details: { city, country },
    },
  } = useUpstreamData();
  const map = useMap();
  return (
    <div className="w-full flex flex-col items-center rounded-md mb-2">
      <div className="flex w-full">
        {buttons.map(
          (
            { Icon, titleText, latLng, focusKey, distance }: BtnValues,
            idx: number,
          ) => {
            const handleButton = () => {
              setMapFocus({
                selected: focusKey,
                latLng,
              });
              map?.setZoom(5);
            };
            return (
              <div key={idx} className="w-[50%] flex flex-col items-center">
                <div className="flex items-center">
                  <Icon size={20} />
                  <strong className="ml-1 text-sm">{titleText}</strong>
                </div>
                <div className="flex items-center my-2">
                  <p className="text-sm">{distance} away</p>
                  <TooltipWrapper
                    delayDuration={0}
                    side={'top'}
                    tooltipText={`Measured from ${city}, ${country}`}
                  >
                    <div>
                      <AiFillInfoCircle
                        size={17}
                        className="ml-1 top-[1px] fill-slate-400 hover:fill-slate-500"
                      />
                    </div>
                  </TooltipWrapper>
                </div>
                <Button
                  variant={'secondary'}
                  className={`${isMapFocussed(latLng, currentCenter) ? 'opacity-40 pointer-events-none' : ''}`}
                  onClick={handleButton}
                >
                  Center map
                  <FaMapMarkedAlt
                    color={'var(---secondary)'}
                    size={18}
                    className="ml-2"
                  />
                </Button>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
