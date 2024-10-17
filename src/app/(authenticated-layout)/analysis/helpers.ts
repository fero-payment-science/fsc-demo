import type { MapFocus } from './types';

export const accounts: Account[] = [
  'amazon',
  'microsoft',
  'apple',
  'netflix',
  'twitter',
  'ebay',
  'skype',
  'yahoo',
  'airbnb',
  'adobe',
  'google',
  'booking',
  'spotify',
  'facebook',
  'linkedin',
  'disneyplus',
  'vimeo',
  'zoho',
  'pinterest',
  'ok',
  'jdid',
  'imgur',
  'kakao',
  'quora',
  'qzone',
  'weibo',
  'envato',
  'flickr',
  'github',
  'lastfm',
  'lazada',
  'mailru',
  'tumblr',
  'discord',
  'myspace',
  'patreon',
  'rambler',
  'samsung',
  'evernote',
  'flipkart',
  'gravatar',
  'atlassian',
  'bukalapak',
  'instagram',
  'tokopedia',
  'wordpress',
  'archiveorg',
  'foursquare',
];

export const firstLevelAccounts: Account[] = [
  'amazon',
  'microsoft',
  'apple',
  'netflix',
  'twitter',
  'ebay',
  'skype',
  'yahoo',
  'airbnb',
  'adobe',
  'google',
  'booking',
  'spotify',
  'facebook',
  'linkedin',
  'disneyplus',
  'vimeo',
  'zoho',
  'pinterest',
];

export const isMapFocussed = (location: LatLong, current: LatLong) => {
  return (
    +location.lat.toFixed(5) === +current.lat.toFixed(5) &&
    +location.lng.toFixed(5) === +current.lng.toFixed(5)
  );
};

export const defaultLatLng: LatLong = {
  lat: 0,
  lng: 0,
};

export const defaultMapFocus: MapFocus = {
  selected: 'none',
  latLng: defaultLatLng,
};
