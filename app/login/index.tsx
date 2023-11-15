import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native-ui-lib';
import { FullScreenFormTemplate, TextField } from '../../Components';
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
                <TextField placeholder="Usuario" />
                <TextField placeholder="Contraseña" secureTextEntry />
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
