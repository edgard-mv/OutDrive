import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native-ui-lib';
import { FullScreenFormTemplate } from '../Components';

export function SignUp() {
    return (
        <>
            <FullScreenFormTemplate title="Registro" showLogo>
                <View
                    style={{
                        rowGap: 10,
                    }}
                    marginB-150
                >
                    <Button label="Pasajero" />
                    <Button label="Conductor" />
                </View>
            </FullScreenFormTemplate>
            <StatusBar style="auto" />
        </>
    );
}
