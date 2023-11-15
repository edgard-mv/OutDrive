import { StatusBar } from 'expo-status-bar';
import { Button, View, Avatar } from 'react-native-ui-lib';
import { FullScreenFormTemplate, TextField } from '../../../Components';
import { useRouter } from 'expo-router';

export default function ClientSignUp() {
    const router = useRouter();

    return (
        <>
            <FullScreenFormTemplate
                title="Registro Cliente"
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
                <View center>
                    <Avatar
                        size={100}
                        source={{
                            uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
                        }}
                        label="Foto de Perfil"
                    />
                </View>
                <TextField placeholder="Nombre" />
                <TextField placeholder="Teléfono" />
                <TextField placeholder="Correo electrónico" />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
