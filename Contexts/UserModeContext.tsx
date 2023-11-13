import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export enum UserMode {
    Client,
    Driver,
}

type UserModeState = {
    mode: UserMode;
    switchTo: (mode: UserMode) => void;
};

const defaultUserModeState = {
    mode: UserMode.Client,
    switchTo: () => {},
} as const;

const UserModeContext = createContext<UserModeState>(defaultUserModeState);

export function UserModeProvider({ children }: { children: ReactNode }) {
    const [currentMode, setCurrentMode] = useState<UserMode>(
        defaultUserModeState.mode,
    );

    const value = useMemo(
        () => ({
            mode: currentMode,
            switchTo: (mode: UserMode) => {
                setCurrentMode(mode);
            },
        }),
        [currentMode, setCurrentMode],
    );

    return (
        <UserModeContext.Provider value={value}>
            {children}
        </UserModeContext.Provider>
    );
}

export function useUserModeState() {
    const state = useContext(UserModeContext);

    return state;
}
