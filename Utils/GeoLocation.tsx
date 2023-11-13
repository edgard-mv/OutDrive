import { useEffect, useState } from 'react';
import { Region } from 'react-native-maps';

import * as Location from 'expo-location';

export async function getCurrentPosition() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== Location.PermissionStatus.GRANTED) {
        return null;
    }

    const currentPosition = await Location.getCurrentPositionAsync();

    return currentPosition;
}

export function useUserLocation(): Region {
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
