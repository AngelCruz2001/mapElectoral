
import { useEffect, useState } from 'react';
import { Map } from '../components/Map';
import { Sidebar } from "../components/Sidebar"
import { getCasillas } from '../helpers/getCasillas';
import { Casilla } from '../interfaces/MarkersInterfaces';

export const Home = () => {


    const [casillasParsed, setCasillasParsed] = useState<Casilla[]>([])
    const [mapElement, setMapElement] = useState<any>(null)
    useEffect(() => {
        (localStorage.getItem('casillas'))
            ? setCasillasParsed(JSON.parse(localStorage.getItem('casillas')!))
            : getCasillas().then(cas => {
                localStorage.setItem('casillas', JSON.stringify(cas))
                setCasillasParsed(cas)
            })
    }, [])



    return (

        <div className="container">
            <div className="card">
                <Map casillas={casillasParsed} setMap={setMapElement} />
                <Sidebar casillas={casillasParsed} mapElement={mapElement} />
            </div>
        </div>
    )
}
