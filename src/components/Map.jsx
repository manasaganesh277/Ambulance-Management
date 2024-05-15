import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3dha3NoLXdhciIsImEiOiJjbHZ0Z3k4NTMxMmdiMmtycmllMmduZ3lmIn0.sMprW8e1SzELdLMXhteNJQ';

export default function Map({ ambulanceLocation }) {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [ambulance, setAmbulance] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const newMap = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [ambulanceLocation.longitude, ambulanceLocation.latitude],
                zoom: 12
            });

            newMap.on('load', () => {
                setMap(newMap);

                // After map loads, add ambulance marker and set up geofencing
                const ambulanceMarker = new mapboxgl.Marker()
                    .setLngLat([ambulanceLocation.longitude, ambulanceLocation.latitude])
                    .addTo(newMap);
                setAmbulance(ambulanceMarker);

                // Clean up map on component unmount
                return () => newMap.remove();
            });
        };

        if (!map) initializeMap();
    }, [ambulanceLocation, map]);

    useEffect(() => {
        if (map) {
            // Add multiple geofences
            const geofences = [
                {
                    coordinates: [77.5908, 12.9716], // Indiranagar
                    radius: 20
                },
                {
                    coordinates: [77.6186, 12.9365], // Domlur
                    radius: 20
                },
                {
                    coordinates: [77.5946, 12.9719], // MG Road
                    radius: 20
                },
                {
                    coordinates: [ambulanceLocation.longitude, ambulanceLocation.latitude],
                    radius: 20
                }
            ];

            geofences.forEach((geofence, index) => {
                map.addSource(`boundary-${index}`, {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: geofence.coordinates
                        },
                        properties: {
                            radius: geofence.radius
                        }
                    }
                });

                map.addLayer({
                    id: `boundary-layer-${index}`,
                    type: 'circle',
                    source: `boundary-${index}`,
                    paint: {
                        'circle-radius': geofence.radius,
                        'circle-color': '#FF0000',
                        'circle-opacity': 0.5
                    }
                });
            });
        }
    }, [map]);

    return <div className='map-container' ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />;
}
