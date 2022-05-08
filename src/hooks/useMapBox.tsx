import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { v4 } from 'uuid';
import { Markers } from '../interfaces/MarkersInterfaces';



mapboxgl.accessToken = 'pk.eyJ1IjoiZ29zbGluZyIsImEiOiJjbDJsYTRleHIwOXQ4M2NwNnF5YjVsOG83In0.emxV4EinD19rffe6erovdQ';
export const useMapBox = (puntoInicial: any) => {

    const mapDiv = useRef(null);
    const [mapRef, setMapRef] = useState<Map | null>(null);
    // let mapRef = useRef<Map>(null);

    const [coords, setCoords] = useState<any>(puntoInicial);

    useLayoutEffect(() => {
        setMapRef(new Map({
            container: mapDiv.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [puntoInicial.lng, puntoInicial.lat],
            zoom: puntoInicial.zoom
        }))
    }, [puntoInicial])


    useEffect(() => {
        mapRef?.on('move', () => {
            const { lng, lat } = mapRef!.getCenter();
            setCoords({
                lat,
                lng,
                zoom: mapRef!.getZoom()
            })
        })
    }, [])


    //agregar marcador
    // useEffect(() => {
    //     mapa.current?.on('click',agregarMarcador);
    // }, [agregarMarcador])
    return {
        // addMarkers,
        mapDiv,
        mapRef,
        coords,
        // setRef
    }
}
