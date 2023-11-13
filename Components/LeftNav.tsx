import { useCallback, useState } from 'react';
import { View, Button, Text, Incubator } from 'react-native-ui-lib';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FundsTransferDialog } from './FundsTransferDialog';
import { UserMode, useUserModeState } from '../Contexts';

export function LeftNav() {
    const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

    const [isFundsTransferOpen, setIsFundsTransferOpen] = useState(false);

    const { switchTo, mode: userMode } = useUserModeState();

    const switchUserMode = useCallback(() => {
        if (userMode === UserMode.Client) {
            switchTo(UserMode.Driver);
            return;
        }

        switchTo(UserMode.Client);
    }, [switchTo, userMode]);

    return (
        <>
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
                    <View
                        style={{
                            rowGap: 10,
                        }}
                    >
                        <Button
                            label="Agregar fondos"
                            onPress={() => {
                                setIsFundsTransferOpen(true);
                                setIsLeftNavOpen(false);
                            }}
                        />
                        <Button
                            label={`Cambiar a ${
                                userMode === UserMode.Client
                                    ? 'Conductor'
                                    : 'Cliente'
                            }`}
                            onPress={switchUserMode}
                        />
                    </View>
                </View>
            </Incubator.Dialog>
            <FundsTransferDialog
                isOpen={isFundsTransferOpen}
                onClose={() => setIsFundsTransferOpen(false)}
            />
        </>
    );
}
