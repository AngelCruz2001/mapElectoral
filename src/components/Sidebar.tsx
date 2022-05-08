import React from 'react'
// import { getCasillas } from '../firebase/config';
import { useEffect, useState } from 'react';
import { Casilla } from '../interfaces/MarkersInterfaces';

interface Props {
    casillas: Casilla[];
    mapElement: any;
}
export const Sidebar = ({ casillas, mapElement }: Props) => {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [searchWord, setSearchWord] = useState<string>('');
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    }

    useEffect(() => {

        setLoading(true);

        if (mapElement !== null) {
            setLoading(false);
        }


    }, [mapElement]);

    const handleGoToLocation = (lat: number, lng: number, location: String) => {
        console.log(location);
        mapElement.flyTo({
            center: [lng, lat],
            zoom: 18
        });
        setIsSelected(true);
    }

    return (
        <div className='sidebar'>

            {/* Searchbar */}
            <div className='search'>
                <i className="fas fa-search"></i>
                <input value={searchWord} type='text' placeholder='Search' onChange={handleSearch} />
            </div>

            {/* Places list*/}
            {
                isLoading ?
                    <h1>Loading...</h1>
                    :

                    isSelected ?
                        <input type="text" placeholder='Nombre del representante...' />
                        :
                        <div className='sidebar__places'>
                            {
                                casillas.filter(cas => cas.SECCION.toString().includes(searchWord)).map(cas => (
                                    <div key={cas.SECCION} className="sidebar__places__place">
                                        <div className='information'>
                                            <h3 className='information__title'>
                                                <span>{cas.SECCION} </span>
                                                {cas.TIPO} {cas.PORC_MC}
                                            </h3>
                                            <p className='information__description'>
                                                {cas.address}
                                            </p>

                                        </div>
                                        <div className='action'>
                                            <button className="seeMap" onClick={() => handleGoToLocation(cas.lat, cas.lon, cas.location)}>
                                                <i className="fas fa-map-marked-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

            }

        </div >
    )
}
