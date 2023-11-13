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
import { formatAmount } from '../../Utils';

function DriverCard({
    userName,
    imgSrc,
    amount,
    onPress,
}: {
    userName: string;
    imgSrc: string;
    amount: number;
    onPress?: () => void;
}) {
    return (
        <UserCard
            onPress={onPress}
            imgSrc={imgSrc}
            userName={userName}
            content={[
                {
                    text: `Costo: ${formatAmount(amount)}`,
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
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 2,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 3,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 4,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 5,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 6,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 7,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
    {
        id: 8,
        userName: 'Jesús de Nazareth',
        imgSrc: 'https://revistautopia.org/wp-content/uploads/2022/08/122-31-01-jesus-era-gay.jpg',
        amount: 69,
    },
];

function DriverDetailsDialog({
    onClose,
    isOpen,
    onConfirm,
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}) {
    const user = testUsers[0];

    return (
        <Incubator.Dialog
            visible={isOpen}
            onDismiss={onClose}
            direction="up"
            width="100%"
            containerStyle={{
                height: 380,
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
                    <Text text50>{user.userName} quiere llevarte</Text>
                    <View
                        marginT-40
                        style={{
                            display: 'flex',
                            rowGap: 10,
                        }}
                    >
                        <UserCard
                            imgSrc={user.imgSrc}
                            userName={user.userName}
                            containerStyle={{
                                height: 90,
                            }}
                            content={[
                                {
                                    text: `Puntaje: ${Infinity.toLocaleString()}/10`,
                                    $textDefault: true,
                                },
                                {
                                    text: `Carreras hechas: ${Infinity.toLocaleString()}`,
                                    $textDefault: true,
                                },
                                {
                                    text: `ID de Usuario: 00000001`,
                                    $textDefault: true,
                                },
                            ]}
                        />
                        <UserCard
                            imgSrc="https://static.vecteezy.com/system/resources/previews/001/270/744/non_2x/wooden-small-boat-with-paddles-isolated-vector.jpg"
                            userName="BMW"
                            content={[
                                {
                                    text: `Modelo: M3`,
                                    $textDefault: true,
                                },
                                {
                                    text: `Placa: CD22-223-22`,
                                    $textDefault: true,
                                },
                            ]}
                        />
                    </View>
                </View>
                <View
                    style={{
                        rowGap: 10,
                    }}
                >
                    <Button
                        label="Aceptar"
                        onPress={() => {
                            onConfirm();
                        }}
                    />
                </View>
            </View>
        </Incubator.Dialog>
    );
}

enum Pages {
    Initial,
    TripSelection,
    WaitForOffers,
}

export function ClientOverlay() {
    const [currentPage, setCurrentPage] = useState(Pages.Initial);
    const [isDriverDetailsOpen, setIsDriverDetailsOpen] = useState(false);

    if (currentPage === Pages.Initial) {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 30,
                    width: '80%',
                    alignSelf: 'center',
                }}
            >
                <Button
                    label="Solicitar Viaje"
                    backgroundColor="blue"
                    onPress={() => {
                        setCurrentPage(Pages.TripSelection);
                    }}
                />
            </View>
        );
    }

    if (currentPage === Pages.TripSelection) {
        return (
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
                <View paddingV-10 marginH-20 flex spread>
                    <View
                        style={{
                            rowGap: Spacings.s3,
                        }}
                    >
                        <TextField
                            text80
                            value="Mayoreo"
                            placeholder="Lugar de recogida"
                            floatingPlaceholder
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        />
                        <TextField
                            text80
                            value="Multicentro"
                            placeholder="Lugar de destino"
                            floatingPlaceholder
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        />
                        <TextField
                            text60
                            placeholder="Comentario"
                            floatingPlaceholder
                            fieldStyle={{
                                ...Dividers.d10,
                            }}
                        />
                    </View>
                    <Button
                        label="Buscar"
                        onPress={() => {
                            setCurrentPage(Pages.WaitForOffers);
                        }}
                    />
                </View>
            </View>
        );
    }

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
                            <DriverCard
                                key={user.id}
                                userName={user.userName}
                                imgSrc={user.imgSrc}
                                amount={user.amount}
                                onPress={() => {
                                    setIsDriverDetailsOpen(true);
                                }}
                            />
                        ))}
                    </View>
                </ScrollView>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        alignSelf: 'center',
                    }}
                    width={150}
                >
                    <Button
                        label="Cancelar"
                        onPress={() => {
                            setCurrentPage(Pages.Initial);
                        }}
                    />
                </View>
            </View>
            <DriverDetailsDialog
                onConfirm={() => {
                    setIsDriverDetailsOpen(false);
                    setCurrentPage(Pages.Initial);
                }}
                isOpen={isDriverDetailsOpen}
                onClose={() => {
                    setIsDriverDetailsOpen(false);
                }}
            />
        </>
    );
}
