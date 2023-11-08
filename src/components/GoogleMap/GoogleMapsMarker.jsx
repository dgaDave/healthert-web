import React, { useEffect, useRef, useState } from 'react'
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import useLocation from '../../hooks/useLocation'
const GoogleMapsMarker = ({pacient}) => {

    const { locationValue } = useLocation("s6cRMeNL7dzJyasthmrs")
    const map = useGoogleMap()
    const markerRef = useRef()


    useEffect(() => {
        if (!map || markerRef.current) return () => { }
        const svgMarker = {
            url: "https://es.coachesvoice.com/wp-content/uploads/2020/12/RonaldoMobile.png",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        }
        const markerOptions = {
            map,
            title: "1",
            icon: svgMarker,
            label: {
                text: "Hola",
                color: "#FFF"
            },
            clickable: false,
            draggable: false
        };
        markerRef.current = new google.maps.Marker(markerOptions)
    }, [map])

    useEffect(() => {
        if (!markerRef.current) return () => { }
        if (locationValue == null || locationValue == {}) return () => { }
        markerRef.current.setPosition({
            lat: locationValue.latitud,
            lng: locationValue.longitud
        })

    }, [locationValue || map])


}

export default GoogleMapsMarker