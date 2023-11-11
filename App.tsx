import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';

import * as Location from 'expo-location';

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
        <View style={styles.container}>
            <View style={styles.navMenuButton}>
                <Button title="Menu" />
            </View>
            <MapView
                style={styles.map}
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
            <View style={styles.pickupButton}>
                <Button title="Solicitar Viaje" />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navMenuButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        alignSelf: 'flex-start',
    },
    map: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
    },
    pickupButton: {
        position: 'absolute',
        top: '90%',
        alignSelf: 'center',
        width: '80%',
    },
});
