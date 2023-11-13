import { useCallback, useState } from 'react';
import { View } from 'react-native-ui-lib';

import MapView, { Region, Marker } from 'react-native-maps';
import { LeftNav, MapOverlay } from '../Components';
import { StatusBar } from 'expo-status-bar';
import { GeoLocation } from '../Utils';
import { StyleSheet } from 'react-native';

export default function Index() {
    const userLocation = GeoLocation.useUserLocation();

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
            <MapOverlay />
            <LeftNav />
            <StatusBar style="auto" />
        </View>
    );
}
