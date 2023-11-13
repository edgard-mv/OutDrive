import { useCallback, useState } from 'react';
import {
    View,
    Button,
    Incubator,
    Colors,
    BorderRadiuses,
    Dividers,
} from 'react-native-ui-lib';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FundsTransferDialog } from './FundsTransferDialog';
import { UserMode, useUserModeState } from '../Contexts';
import { UserCard } from './UserCard';

function MenuOption({
    onPress,
    label,
}: {
    onPress: () => void;
    label: string;
}) {
    return (
        <Button
            fullWidth
            label={label}
            onPress={onPress}
            style={{
                ...Dividers.d10,
                height: 60,
                justifyContent: 'flex-start',
            }}
            outline
        />
    );
}

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

    const showAddFunds = userMode === UserMode.Client;

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
                    backgroundColor={Colors.$iconPrimary}
                    borderRadius={BorderRadiuses.br50}
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
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <View paddingH-20>
                            <UserCard
                                userName="Leonel Messi"
                                imgSrc="https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"
                                content={[
                                    {
                                        text:
                                            userMode === UserMode.Client
                                                ? 'Pasajero'
                                                : 'Conductor',
                                    },
                                ]}
                                imgAlignment="right"
                            />
                        </View>
                        <View marginT-40>
                            <MenuOption label="Viajes" onPress={() => {}} />
                            <MenuOption
                                label="Viaje en moto"
                                onPress={() => {}}
                            />
                            <MenuOption label="Encomienda" onPress={() => {}} />
                        </View>
                    </View>
                    <View>
                        {showAddFunds && (
                            <MenuOption
                                label="Agregar fondos"
                                onPress={() => {
                                    setIsFundsTransferOpen(true);
                                    setIsLeftNavOpen(false);
                                }}
                            />
                        )}
                        <MenuOption
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
