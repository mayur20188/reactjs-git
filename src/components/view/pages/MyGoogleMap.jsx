import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {Button} from 'react-bootstrap';

const MyGoogleMap = ({ array, isAdding, getLocation }) => {

    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});

    const markerRef = useRef(null);

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const onSelect = item => {
        setSelected(item);
    }

    const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const currentPosition = {
            lat: latitude,
            lng: longitude
        }
        setCurrentPosition(currentPosition);
    }

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
    };

    const footer = (
        <div className="footer">
            <div className="inner-footer">
                <span className="location-text">Choose location and press</span>
                <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
                    Next
                </Button>
            </div>
        </div>
    );

    const mapStyles = () => {
        if (!isAdding) {
        return {
            marginTop: "20px",
            height: "400px",
            width: "100%"
        }
        } else {
        return {
            marginTop: "20px",
            height: "400px",
            width: "100%"
        }
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    });

    const locations = [
        {
            name: "Location 1",
            location: { 
                lat: 41.3954,
                lng: 2.162 
            },
        },
        {
            name: "Location 2",
            location: { 
                lat: 41.3917,
                lng: 2.1649
            },
        },
        {
        name: "Location 3",
            location: { 
                lat: 41.3773,
                lng: 2.1585
            },
        },
        {
            name: "Location 4",
            location: { 
                lat: 41.3797,
                lng: 2.1682
            },
        },
        {
            name: "Location 5",
            location: { 
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    return (
    <>
        <LoadScript
            id="script-loader"
            googleMapsApiKey='AIzaSyALsm2XWtRQ5INM_ITSCwYB7rQdI9ILgy0'
            // googleMapsApiKey='AIzaSyDzaeY6bldWIJ421ienoZA8a9bQ0CvPBjw'
        >
            <GoogleMap
                id='example-map'
                mapContainerStyle={mapStyles()}
                draggable={true}
                zoom={12}
                center={currentPosition.lat ? currentPosition : defaultCenter}
            >
            {
                locations ?
                locations.map(item => {
                return (
                <Marker 
                    key={item.name}
                    position={item.location}
                    onClick={() => onSelect(item)}
                />
                )
                }) : null
            }
            {
                isAdding ? 
                <Marker
                    position={currentPosition}
                    ref={() => markerRef}
                    onDragEnd={(e) => onMarkerDragEnd(e)}
                    draggable={true} /> :
                null
            }
            {
                selected.location ? (
                    <InfoWindow
                        position={selected.location}
                        onCloseClick={() => setSelected({})}
                        >
                        <div className="infowindow">
                            <h4>{selected.name}</h4>
                            {/* <img src={selected.image} className="small-image" alt="rental"/> */}
                        </div>
                    </InfoWindow>
                ) : null
            }
            </GoogleMap>
        </LoadScript>
        {
            isAdding ?
            footer :
            null
        }

        <div style={{textAlign:'center'}}>
            {
                locations.map(item => {
                    return(
                        <Button key={item.name} color="primary" style={{margin:'10px'}} onClick={() => onSelect(item)}>
                            {item.name}
                        </Button>
                    )
                })
            }
            
        </div>
    </>
)}

export default MyGoogleMap;