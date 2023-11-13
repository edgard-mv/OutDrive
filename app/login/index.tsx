import { StatusBar } from 'expo-status-bar';
import { Button, TextField, Dividers, View } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../../Components';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

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
                        <Button
                            label="Iniciar Sesión"
                            onPress={() => {
                                router.replace('/');
                            }}
                        />
                        <Button
                            outline
                            label="Registrarse"
                            onPress={() => {
                                router.replace('/signup');
                            }}
                        />
                        <Button link label="Recuperar contraseña" />
                    </View>
                }
            >
                <TextField
                    floatingPlaceholder
                    text40
                    placeholder="Usuario"
                    grey10
                    style={{ ...Dividers.d10 }}
                />
                <TextField
                    floatingPlaceholder
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
