import { StatusBar } from 'expo-status-bar';
import { Button, View, Card } from 'react-native-ui-lib';
import { FullScreenFormTemplate, TextField } from '../../../../Components';
import { useRouter } from 'expo-router';

export default function VehicleRegistration() {
    const router = useRouter();

    return (
        <>
            <FullScreenFormTemplate
                title="Registro de Vehículo"
                actionButtons={
                    <View width="100%">
                        <Button
                            label="Confirmar"
                            onPress={() => {
                                router.replace('/');
                            }}
                        />
                    </View>
                }
            >
                <TextField placeholder="Placa" />
                <TextField placeholder="Color" />
                <TextField placeholder="Marca" />
                <TextField placeholder="Modelo" />
                <TextField placeholder="Año" />
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
