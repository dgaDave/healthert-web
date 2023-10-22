import React, { useState } from 'react'
import { GoogleMapsProvider, useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import { styles } from './MapStyles'

const GoogleMap = () => {
    const mapOptions = {
        zoom: 18,
        center: {
            lat: 43.68,
            lng: -79.43
        },
        minZoom: 15,
        maxZoom: 22,
        disableDefaultUI: true,
        styles: styles
    }

    const [mapContainer, setMapContainer] = useState(null)

    return (
        <div className='h-screen w-screen flex flex-row-reverse'>
            <GoogleMapsProvider
                googleMapsAPIKey='AIzaSyBbY_7khNJQ706ykCfevkbBMEG3twrf_-Y'
                mapOptions={mapOptions}
                mapContainer={mapContainer} >
                <div className='h-full w-[75%]' ref={(node) => setMapContainer(node)} />
            </GoogleMapsProvider >
        </div>

    )
}

export default GoogleMap