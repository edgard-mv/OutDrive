import { StatusBar } from 'expo-status-bar';
import { Button, TextField, Dividers, View } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../Components';

export function Login() {
    return (
        <>
            <FullScreenFormTemplate
                title="Bienvenido"
                showLogo
                actionButtons={
                    <View
                        width="100%"
                        style={{
                            rowGap: 10,
                        }}
                    >
                        <Button label="Iniciar Sesión" />
                        <Button outline label="Registrarse" />
                        <Button link label="Recuperar contraseña" />
                    </View>
                }
            >
                <TextField
                    text40
                    placeholder="Usuario"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    text40
                    placeholder="Contraseña"
                    secureTextEntry
                    grey10
                    style={{ ...Dividers.d10 }}
                />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
