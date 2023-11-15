import { Button, View, Text } from 'react-native-ui-lib';
import { BottomDrawer } from '../BottomDrawer';
import { useState } from 'react';
import { RateUserDialog } from './RateUserDialog';

export function TripInProcessDrawer({
    onCancel,
    showEndTripButton = false,
}: {
    onCancel: () => void;
    showEndTripButton?: boolean;
}) {
    const [isRateDriverOpen, setIsRateDriverOpen] = useState(false);
    const [confirmation, setConfirmation] = useState({
        message: '',
        show: false,
    });

    const closeConfirmation = () => {
        setConfirmation({
            show: false,
            message: '',
        });
    };

    const openConfirmation = (msg: string) => {
        setConfirmation({
            show: true,
            message: msg,
        });
    };

    const tripInfo = {
        from: 'Mayoreo',
        to: 'Multicentro',
        eta: new Date().getMinutes(),
        distance: 4.4,
    };

    return (
        <>
            <BottomDrawer>
                <View paddingV-10 paddingH-20 flex spread>
                    {confirmation.show ? (
                        <>
                            <Text text50 center>
                                {confirmation.message}
                            </Text>
                            <View
                                style={{
                                    rowGap: 10,
                                }}
                            >
                                <Button
                                    label="Sí"
                                    onPress={() => {
                                        closeConfirmation();
                                        setIsRateDriverOpen(true);
                                    }}
                                />
                                <Button
                                    label="No"
                                    outline
                                    onPress={() => {
                                        closeConfirmation();
                                    }}
                                />
                            </View>
                        </>
                    ) : (
                        <>
                            <Text text50 center>
                                Viaje en Proceso
                            </Text>
                            <Text text60>
                                Recogida: <Text text60BL>{tripInfo.from}</Text>
                            </Text>
                            <Text text60>
                                Destino: <Text text60BL>{tripInfo.to}</Text>
                            </Text>
                            <Text text60>
                                Tiempo aproximado:{' '}
                                <Text text60BL>{tripInfo.eta} minutos</Text>
                            </Text>
                            <Text text60>
                                Distancia:{' '}
                                <Text text60BL>{`${tripInfo.distance} Km${
                                    tripInfo.distance > 1 ? 's' : ''
                                }`}</Text>
                            </Text>
                            <View
                                style={{
                                    rowGap: 10,
                                }}
                            >
                                {showEndTripButton && (
                                    <Button
                                        label="Terminar Carrera"
                                        outline
                                        onPress={() => {
                                            openConfirmation(
                                                '¿Ha terminado el viaje con éxito?',
                                            );
                                        }}
                                    />
                                )}
                                <Button
                                    label="Cancelar"
                                    outline
                                    onPress={() => {
                                        openConfirmation(
                                            '¿Seguro que quiere cancelar el viaje?',
                                        );
                                    }}
                                />
                            </View>
                        </>
                    )}
                </View>
            </BottomDrawer>
            <RateUserDialog
                isOpen={isRateDriverOpen}
                defaultRate={3}
                onConfirm={(rate) => {
                    console.log(rate);
                    setIsRateDriverOpen(false);
                    onCancel();
                }}
            />
        </>
    );
}
