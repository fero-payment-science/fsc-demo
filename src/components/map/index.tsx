/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */
'use client';
import {
  Map,
  type MapCameraChangedEvent,
  type MapEvent,
  Marker,
  useMap,
  useMarkerRef,
} from '@vis.gl/react-google-maps';
import React, { useEffect } from 'react';

import type { MapFocus } from '@/app/(authenticated-layout)/analysis/types';

import { mapStyles } from './customStyle';

export default function MapComponent({
  mapFocus,
  ipLocation,
  primaryAddress,
  onCenterChange,
  onDragEnd,
}: {
  mapFocus: MapFocus;
  ipLocation: LatLong;
  primaryAddress: LatLong;
  onCenterChange: (e: MapCameraChangedEvent) => void;
  onDragEnd: (e: MapEvent<unknown>) => void;
}) {
  const [primaryMarkerRef, primaryMarker] = useMarkerRef();
  const [ipMarkerRef, ipMarker] = useMarkerRef();
  const map = useMap();

  useEffect(() => {
    if (map) {
      if (mapFocus.selected !== 'none') {
        map.panTo(mapFocus.latLng);
      }

      primaryMarker?.setAnimation(null);
      ipMarker?.setAnimation(null);
      if (mapFocus.selected === 'ip') {
        setTimeout(() => {
          ipMarker?.setAnimation(google.maps.Animation.DROP);
        }, 400);
      } else if (mapFocus.selected === 'primary') {
        setTimeout(() => {
          primaryMarker?.setAnimation(google.maps.Animation.DROP);
        }, 400);
      }
    }
  }, [map, mapFocus]);

  return (
    <Map
      zoom={5}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      zoomControl={true}
      styles={mapStyles}
      onCenterChanged={onCenterChange}
      onDragend={onDragEnd}
    >
      <Marker ref={primaryMarkerRef} position={primaryAddress} />
      <Marker ref={ipMarkerRef} position={ipLocation} />
    </Map>
  );
}
