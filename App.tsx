import { ReactNode } from 'react';

import { UserModeProvider } from './Contexts';
import {
    IndexPage,
    Login,
    SignUp,
    ClientSignUp,
    DriverSignUp,
    VehicleRegistration,
} from './Pages';
import { Colors } from 'react-native-ui-lib';

Colors.loadDesignTokens({
    primaryColor: '#00004e',
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
    return <UserModeProvider>{children}</UserModeProvider>;
}

export default function App() {
    return (
        <GlobalContextProvider>
            <IndexPage />
            {/* <Login /> */}
            {/* <ClientSignUp /> */}
            {/* <DriverSignUp /> */}
            {/* <VehicleRegistration /> */}
        </GlobalContextProvider>
    );
}
