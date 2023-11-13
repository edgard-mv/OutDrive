import {
    View,
    BorderRadiuses,
    Spacings,
    Text,
    Button,
    Incubator,
    TextField,
    Dividers,
} from 'react-native-ui-lib';

import { ScrollView } from 'react-native';
import { useState } from 'react';
import { UserCard } from '../UserCard';

function PassengerCard({
    userName,
    imgSrc,
    trip,
    onPress,
}: {
    userName: string;
    imgSrc: string;
    trip: {
        from: string;
        to: string;
    };
    onPress?: () => void;
}) {
    return (
        <UserCard
            onPress={onPress}
            imgSrc={imgSrc}
            userName={userName}
            content={[
                {
                    text: trip.from,
                    text90: true,
                    $textDefault: true,
                },
                {
                    text: trip.to,
                    text90: true,
                    $textDefault: true,
                },
            ]}
        />
    );
}

const testUsers = [
    {
        id: 1,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 2,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 3,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 4,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 5,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 6,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 7,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
    {
        id: 8,
        userName: 'Pablo Escobar',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrgYAfQouOaXIXQ0XTKBGhQLAg4yqauOlSPtnjwE1HbVHt_NkdiUzrtQOuuClkW2EiLhxzgnqO2AZSFlg',
        trip: {
            from: 'Mayoreo',
            to: 'Multicentro',
        },
    },
];

function TripQuotationDialog({
    onClose,
    isOpen,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Incubator.Dialog
            visible={isOpen}
            onDismiss={onClose}
            direction="up"
            width="100%"
            containerStyle={{
                height: '30%',
            }}
            modalProps={{
                statusBarTranslucent: true,
            }}
        >
            <View
                width="100%"
                height="100%"
                paddingT-50
                paddingB-20
                paddingH-20
                spread
            >
                <View>
                    <Text text50>Ingrese el precio de la carrera</Text>
                    <View
                        marginT-40
                        style={{
                            display: 'flex',
                            rowGap: 10,
                        }}
                    >
                        <TextField
                            text60
                            placeholder="Monto"
                            floatingPlaceholder
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        rowGap: 10,
                    }}
                >
                    <Button
                        label="Enviar"
                        onPress={() => {
                            onClose();
                        }}
                    />
                </View>
            </View>
        </Incubator.Dialog>
    );
}

export function DriverOverlay() {
    const [isTripQuotationOpen, setIsTripQuotationOpen] = useState(false);

    return (
        <>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    height: '40%',
                    width: '100%',
                    alignSelf: 'center',
                    borderTopLeftRadius: BorderRadiuses.br60,
                    borderTopRightRadius: BorderRadiuses.br60,
                    overflow: 'hidden',
                }}
                backgroundColor="#eee"
            >
                <ScrollView>
                    <View
                        marginH-10
                        style={{
                            rowGap: Spacings.s3,
                        }}
                        paddingT-10
                    >
                        {testUsers.map((user) => (
                            <PassengerCard
                                key={user.id}
                                userName={user.userName}
                                imgSrc={user.imgSrc}
                                trip={{
                                    from: user.trip.from,
                                    to: user.trip.to,
                                }}
                                onPress={() => {
                                    setIsTripQuotationOpen(true);
                                }}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
            <TripQuotationDialog
                isOpen={isTripQuotationOpen}
                onClose={() => {
                    setIsTripQuotationOpen(false);
                }}
            />
        </>
    );
}
