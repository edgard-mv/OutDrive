import { StatusBar } from 'expo-status-bar';
import { Button, View, Avatar } from 'react-native-ui-lib';
import { FullScreenFormTemplate, TextField } from '../../../Components';
import { useRouter } from 'expo-router';

export default function DriverSignUp() {
    const router = useRouter();

    return (
        <>
            <FullScreenFormTemplate
                title="Registro Conductor"
                actionButtons={
                    <View width="100%">
                        <Button
                            label="Confirmar"
                            onPress={() => {
                                router.replace('/signup/driver/vehicle');
                            }}
                        />
                    </View>
                }
            >
                <View center>
                    <Avatar
                        size={100}
                        source={{
                            uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
                        }}
                        label="Foto de Perfil"
                    />
                </View>
                <TextField placeholder="Nombre Completo" />
                <TextField placeholder="Teléfono" />
                <TextField placeholder="Correo electrónico" />
                <TextField placeholder="Facebook" />
                <TextField placeholder="Licencia" />
                <TextField placeholder="Identificación personal" />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
