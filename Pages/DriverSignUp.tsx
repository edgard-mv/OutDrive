import { StatusBar } from 'expo-status-bar';
import { Button, TextField, Dividers, View, Avatar } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../Components';

export function DriverSignUp() {
    return (
        <>
            <FullScreenFormTemplate
                title="Registro Conductor"
                actionButtons={
                    <View width="100%">
                        <Button label="Confirmar" />
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
                    text40
                    placeholder="Nombre Completo"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Teléfono"
                    secureTextEntry
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Correo electrónico"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Facebook"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Licencia"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Identificación personal"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
