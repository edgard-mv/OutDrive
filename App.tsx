import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';

import { View, Button } from 'react-native-ui-lib';

import * as Location from 'expo-location';
import { LeftNav } from './Components';

async function getCurrentPosition() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== Location.PermissionStatus.GRANTED) {
        return null;
    }

    const currentPosition = await Location.getCurrentPositionAsync();

    return currentPosition;
}

function useUserLocation(): Region {
    const [location, setLocation] = useState<Region>({
        latitude: 4,
        longitude: -74,
        latitudeDelta: 5,
        longitudeDelta: 5,
    });

    useEffect(() => {
        (async () => {
            const currentLocation = await getCurrentPosition();

            if (currentLocation == null) {
                return;
            }

            setLocation({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    });

    return location;
}

export default function App() {
    const userLocation = useUserLocation();

    const [mapCenterCoordinates, setMapCenterCoordinates] =
        useState<Region | null>(null);

    const handleRegionChangeComplete = useCallback(
        (region: Region) => {
            setMapCenterCoordinates(region);
        },
        [setMapCenterCoordinates],
    );

    const markerPosition = mapCenterCoordinates ?? userLocation;

    return (
        <View style={StyleSheet.absoluteFillObject}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                mapPadding={{
                    top: 30,
                    left: 80,
                    bottom: 30,
                    right: 80,
                }}
                initialRegion={userLocation}
                region={userLocation}
                onRegionChangeComplete={handleRegionChangeComplete}
            >
                <Marker
                    coordinate={{
                        latitude: markerPosition.latitude,
                        longitude: markerPosition.longitude,
                    }}
                    tracksViewChanges
                />
            </MapView>
            <View
                style={{
                    position: 'absolute',
                    bottom: 30,
                    width: '80%',
                    alignSelf: 'center',
                }}
            >
                <Button label="Solicitar Viaje" backgroundColor="blue" />
            </View>
            <LeftNav />
            <StatusBar style="auto" />
        </View>
    );
}
