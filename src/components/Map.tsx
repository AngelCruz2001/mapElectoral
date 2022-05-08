import { useEffect, useState } from 'react';
import { useMapBox } from '../hooks/useMapBox';
import { Casilla } from '../interfaces/MarkersInterfaces';
import { Marker } from 'mapbox-gl';

interface Props {
  casillas: Casilla[];
  setMap: (map: any) => void;
}

const puntoInicial = {
  lat: 24.003615,
  lng: -104.633806,
  zoom: 20
};

export const Map = ({ casillas, setMap }: Props) => {

  const { mapDiv, mapRef, coords } = useMapBox(puntoInicial)

  useEffect(() => {
    if (mapRef) {
      setMap(mapRef);
    }
  }, [mapRef, setMap])


  useEffect(() => {
    if (casillas.length > 0) {
      addMarkers(casillas)
    }
  }, [casillas])

  const addMarkers = (casillas: Casilla[]) => {
    console.log((casillas))
    casillas.forEach(marker => {
      new Marker()
        .setLngLat([marker.lon, marker.lat])
        .addTo(mapRef!)
    }
    )
  }


  return (
    <>
      <div className="map" ref={mapDiv} />
    </>
  )
}
