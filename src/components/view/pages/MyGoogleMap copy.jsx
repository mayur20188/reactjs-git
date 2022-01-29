import React, { useState } from 'react';
import { compose, withProps } from "recompose";
import { Container } from 'react-bootstrap';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

// const MyGoogleMap = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyALsm2XWtRQ5INM_ITSCwYB7rQdI9ILgy0&v=3.exp&libraries=geometry,drawing,places",
//         // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzaeY6bldWIJ421ienoZA8a9bQ0CvPBjw",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />
//     }),
//     withScriptjs,
//     withGoogleMap
// )(props => (
//         <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//           {props.isMarkerShown && (
//             <Marker position={{ lat: -34.397, lng: 150.644 }} />
//           )}
//         </GoogleMap>
// ));

const MyGoogleMap = () => {
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

    const [ selected, setSelected ] = useState({});
    const options ={
        //styles: MapStyles,
        disableDefaultUI: true,
    }

    const onSelect = item => {
        setSelected(item);
    }

    return(
        <>
            <GoogleMap
                defaultZoom={17} 
                defaultCenter={{lat: 29.0824139, lng: -110.966389}}
                options={options}
            >
            {
                locations.map(item =>(
                    <Marker
                        key={item['item.id']}
                        position={{
                            lat: parseFloat(item['item.locations.lat']),
                            lng: parseFloat(item['item.locations.lng'])
                        }}
                        onClick={() => onSelect(item)}
                    />
                ))
            }
            {
                selected.location && (
                    <InfoBox
                        defaultPosition={selected.location}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                        >
                        <p>{selected.name}</p>
                    </InfoBox>
                )
            }
            </GoogleMap>
        </>
    )
}

export default MyGoogleMap;