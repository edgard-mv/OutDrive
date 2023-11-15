import { Incubator, View, Text, Button, Colors } from 'react-native-ui-lib';
import { UserCard } from '../UserCard';
import { useState } from 'react';
import { TextField } from '../TextField';

import { AirbnbRating } from 'react-native-ratings';

export function RateUserDialog({
    isOpen,
    onConfirm,
    defaultRate = 3,
}: {
    isOpen: boolean;
    onConfirm: (rate: number) => void;
    defaultRate?: number;
}) {
    const user = {
        id: 5,
        userName: 'Héctor Pereira',
        imgSrc: 'data:image/jpeg;base64,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',
        amount: 420,
    };

    const [rate, setRate] = useState(defaultRate);

    return (
        <Incubator.Dialog
            visible={isOpen}
            onDismiss={() => {
                onConfirm(defaultRate);
            }}
            direction="up"
            width="100%"
            containerStyle={{
                height: 390,
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
                    <Text text50>Puntúa a {user.userName}</Text>
                    <View
                        marginT-20
                        style={{
                            display: 'flex',
                            rowGap: 10,
                        }}
                    >
                        <UserCard
                            imgSrc={user.imgSrc}
                            userName={user.userName}
                            containerStyle={{
                                height: 80,
                            }}
                            content={[
                                {
                                    text: `Puntaje: ${Infinity.toLocaleString()}/10`,
                                    $textDefault: true,
                                },
                                {
                                    text: `ID de Usuario: 00000001`,
                                    $textDefault: true,
                                },
                            ]}
                        />
                        <View center marginT-10>
                            <AirbnbRating
                                count={5}
                                defaultRating={defaultRate}
                                size={35}
                                showRating={false}
                                onFinishRating={(val) => setRate(val)}
                                selectedColor={Colors.yellow40}
                            />
                        </View>
                        <TextField placeholder="Comentario" />
                    </View>
                </View>
                <View>
                    <Button
                        label="Aceptar"
                        onPress={() => {
                            onConfirm(rate);
                        }}
                    />
                </View>
            </View>
        </Incubator.Dialog>
    );
}
