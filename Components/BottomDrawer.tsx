import { ReactNode } from 'react';
import { View, BorderRadiuses } from 'react-native-ui-lib';

export function BottomDrawer({ children }: { children: ReactNode }) {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                height: '40%',
                width: '100%',
                alignSelf: 'center',
                borderTopLeftRadius: BorderRadiuses.br60,
                borderTopRightRadius: BorderRadiuses.br60,
                overflow: 'hidden',
            }}
            backgroundColor="#eee"
        >
            {children}
        </View>
    );
}
