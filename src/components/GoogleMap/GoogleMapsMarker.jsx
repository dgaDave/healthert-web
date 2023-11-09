import { useEffect, useRef, useState } from 'react'
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import useLocation from '../../hooks/useLocation'
import usePic from '../../hooks/usePic'
const GoogleMapsMarker = ({ pacient }) => {

    const { locationValue } = useLocation(pacient.id)
    const map = useGoogleMap()
    const markerRef = useRef()
    const { picUrl } = usePic(pacient.id)

    useEffect(() => {
        if (!map || markerRef.current) return () => { }
        const svgMarker = {
            url: "",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        }
        const markerOptions = {
            map,
            title: pacient.curp,
            icon: svgMarker,
            // label: {
            //     text: pacient.curp,
            //     color: "#6FD81C"
            // },
            clickable: false,
            draggable: false
        };
        markerRef.current = new google.maps.Marker(markerOptions)
    }, [map])

    useEffect(() => {
        if (!map || !markerRef.current) return () => { }
        const svgMarker = {
            url: picUrl,
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
        }
        markerRef.current.setIcon(svgMarker)
    }, [picUrl])


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