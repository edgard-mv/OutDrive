import { ReactNode } from 'react';

import { UserModeProvider } from './Contexts';
import Index from './Pages/Index';

function GlobalContextProvider({ children }: { children: ReactNode }) {
    return <UserModeProvider>{children}</UserModeProvider>;
}

export default function App() {
    return (
        <GlobalContextProvider>
            <Index />
        </GlobalContextProvider>
    );
}
