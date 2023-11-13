import { ReactNode } from 'react';

import { UserModeProvider } from '../Contexts';
import { IndexPage } from '../IndexPage';
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
        </GlobalContextProvider>
    );
}
