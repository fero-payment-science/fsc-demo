/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { MdMyLocation, MdOutlineLocationCity } from 'react-icons/md';
import { RiMapPinUserLine } from 'react-icons/ri';

import { getAddressDetails } from '@/app/actions/google-server-actions';
import MapComponent from '@/components/map';
import { useUpstreamData } from '@/contexts/upstream-data-context';

import DashModule from '../_components/dash-module';
// import LocationButtons from '../_components/location-buttons/location-buttons';
import { defaultLatLng, defaultMapFocus } from '../helpers';
import type { BtnValues, MapFocus } from '../types';
import { useCheckout } from '@/contexts/checkout-context';
import LocationButtons from '../_components/location-buttons/location-buttons';

export default function UserLocation() {
  const {
    distanceMatrix: { rows },
    upstreamData: {
      ip_details: { latitude, longitude },
    },
  } = useUpstreamData();
  const { shippingAddress: addressDetails } = useCheckout();
  const ipLocation: LatLong = { lat: latitude, lng: longitude };
  const [primaryLatLong, setPrimaryLatLong] = useState<LatLong | null>(null);
  const [currentCenter, setCurrentCenter] = useState<LatLong>(defaultLatLng);
  const [mapFocus, setMapFocus] = useState<MapFocus>(defaultMapFocus);

  const getPrimaryLatLong = async () => {
    const data = await getAddressDetails(addressDetails);
    const latLong = data.results[0].geometry.location;
    const primary: LatLong = { lat: latLong.lat, lng: latLong.lng };
    setPrimaryLatLong(primary);
    setMapFocus({ selected: 'primary', latLng: primary });
  };

  useEffect(() => {
    getPrimaryLatLong();
  }, []);

  const onCenterChange = (e: { detail: { center: LatLong } }) => {
    setCurrentCenter(e.detail.center);
  };

  const onDragEnd = () => {
    setMapFocus((prev) => ({ ...prev, selected: 'none' }));
  };

  const buttons: BtnValues[] = [
    {
      titleText: 'Primary address',
      Icon: MdOutlineLocationCity,
      latLng: primaryLatLong!,
      focusKey: 'primary',
      distance: rows ? rows[0].elements[0].distance?.text : '',
    },
    {
      titleText: 'IP address',
      Icon: MdMyLocation,
      latLng: ipLocation,
      focusKey: 'ip',
      distance: rows ? rows[0].elements[1].distance?.text : '',
    },
  ];

  return (
    primaryLatLong && (
      <DashModule
        title="User Location Data"
        Icon={RiMapPinUserLine}
        className={"address"}
      >
        <div className="h-full flex flex-col gap-y-2">
          <div className="flex mb-2 w-full justify-center">
            <strong className="mr-2">Address:</strong>
            <p>
              {Object.values(addressDetails)
                .filter((i) => i !== "")
                .join(", ")}
            </p>
          </div>
          <div className="border-2 rounded-md border-slate-200 my-4 grow shadow-md">
            <MapComponent
              mapFocus={mapFocus}
              ipLocation={ipLocation}
              primaryAddress={primaryLatLong}
              onCenterChange={onCenterChange}
              onDragEnd={onDragEnd}
            />
          </div>
          <LocationButtons
            buttons={buttons}
            currentCenter={currentCenter}
            setMapFocus={setMapFocus}
          />
        </div>
      </DashModule>
    )
  );
}
