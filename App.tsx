import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';

import { View, Button, Text, Incubator } from 'react-native-ui-lib';

import FontAwesome from '@expo/vector-icons/FontAwesome';

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

    const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

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
                width={60}
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 20,
                }}
            >
                <FontAwesome.Button
                    name="navicon"
                    backgroundColor="blue"
                    borderRadius={15}
                    iconStyle={{
                        position: 'relative',
                        left: 8,
                    }}
                    size={32}
                    color="#eee"
                    onPress={() => {
                        setIsLeftNavOpen(true);
                    }}
                />
            </View>
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
            <Incubator.Dialog
                visible={isLeftNavOpen}
                onDismiss={() => setIsLeftNavOpen(false)}
                direction="left"
                width="80%"
                containerStyle={{
                    height: '100%',
                    maxHeight: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
                modalProps={{
                    statusBarTranslucent: true,
                }}
            >
                <View
                    width="100%"
                    height="100%"
                    paddingV-50
                    paddingH-20
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <Text>User Goes here</Text>
                        <View
                            marginT-40
                            style={{
                                display: 'flex',
                                rowGap: 10,
                            }}
                        >
                            <Button label="Viajes" />
                            <Button label="Viaje en moto" />
                            <Button label="Encomienda" />
                        </View>
                    </View>
                    <Button label="Cambiar a conductor" />
                </View>
            </Incubator.Dialog>
            <StatusBar style="auto" />
        </View>
    );
}
