import { StatusBar } from 'expo-status-bar';
import { Button, TextField, Dividers, View, Avatar } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../../../Components';
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
                <TextField
                    floatingPlaceholder
                    text40
                    placeholder="Nombre"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    floatingPlaceholder
                    text40
                    placeholder="Teléfono"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    floatingPlaceholder
                    text40
                    placeholder="Correo electrónico"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
