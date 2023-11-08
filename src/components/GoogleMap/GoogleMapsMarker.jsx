import React, { useEffect, useState } from 'react'
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import useLocation from '../../hooks/useLocation'
const GoogleMapsMarker = () => {

    const { locationValue } = useLocation("s6cRMeNL7dzJyasthmrs")
    const map = useGoogleMap()

    useEffect(() => {
        if (!map) return () => { }
        if (!locationValue) return () => { };
        console.log(locationValue)
        const name = 'Museo Nacional del Prado'
        const position = { lat: locationValue.latitud, lng: locationValue.longitud }


        const markerOptions = {
            map,
            position,
            title: name,
            label: {
                text: name,
                color: "#FFF"
            },
            clickable: false,
        };

        return new google.maps.Marker(markerOptions)

    }, [locationValue || map])



    return null
}

export default GoogleMapsMarker