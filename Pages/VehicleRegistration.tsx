import { StatusBar } from 'expo-status-bar';
import { Button, TextField, Dividers, View, Card } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../Components';

export function VehicleRegistration() {
    return (
        <>
            <FullScreenFormTemplate
                title="Registro de Vehículo"
                actionButtons={
                    <View width="100%">
                        <Button label="Confirmar" />
                    </View>
                }
            >
                <TextField
                    text40
                    placeholder="Placa"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Color"
                    secureTextEntry
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Marca"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Modelo"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Año"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 10,
                    }}
                    row
                >
                    <Card
                        containerStyle={{ height: 100 }}
                        backgroundColor="#ddd"
                    >
                        <Card.Section
                            key="image"
                            imageSource={{
                                uri: 'https://www.revyuh.com/wp-content/uploads/2020/08/A-Chinese-car-becomes-the-cheapest-electric-car-in-the-US-market.jpg',
                            }}
                            imageStyle={{ height: '100%', width: 100 }}
                        />
                    </Card>
                    <Card
                        containerStyle={{ height: 100 }}
                        backgroundColor="#ddd"
                    >
                        <Card.Section
                            key="image"
                            imageSource={{
                                uri: 'https://www.revyuh.com/wp-content/uploads/2020/08/A-Chinese-car-becomes-the-cheapest-electric-car-in-the-US-market.jpg',
                            }}
                            imageStyle={{ height: '100%', width: 100 }}
                        />
                    </Card>
                    <Card
                        containerStyle={{ height: 100 }}
                        backgroundColor="#ddd"
                    >
                        <Card.Section
                            key="image"
                            imageSource={{
                                uri: 'https://www.revyuh.com/wp-content/uploads/2020/08/A-Chinese-car-becomes-the-cheapest-electric-car-in-the-US-market.jpg',
                            }}
                            imageStyle={{ height: '100%', width: 100 }}
                        />
                    </Card>
                </View>
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
