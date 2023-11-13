import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../../Components';
import { useRouter } from 'expo-router';

export default function SignUp() {
    const router = useRouter();

    return (
        <>
            <FullScreenFormTemplate title="Registro" showLogo>
                <View
                    style={{
                        rowGap: 10,
                    }}
                    marginB-150
                >
                    <Button
                        label="Pasajero"
                        onPress={() => {
                            router.push('/signup/client');
                        }}
                    />
                    <Button
                        label="Conductor"
                        onPress={() => {
                            router.push('/signup/driver');
                        }}
                    />
                </View>
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
