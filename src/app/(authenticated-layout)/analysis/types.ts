import type { IconType } from 'react-icons';

type FocusKey = 'ip' | 'primary' | 'none';

export interface BtnValues {
  titleText: string;
  Icon: IconType;
  latLng: LatLong;
  focusKey: FocusKey;
  distance: string;
}

export interface MapFocus {
  selected: FocusKey;
  latLng: LatLong;
}
