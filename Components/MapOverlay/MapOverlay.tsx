import { UserMode, useUserModeState } from '../../Contexts';
import { DriverOverlay } from './DriverOverlay';
import { ClientOverlay } from './ClientOverlay';

export function MapOverlay() {
    const { mode: userMode } = useUserModeState();

    if (userMode === UserMode.Client) {
        return <ClientOverlay />;
    }

    if (userMode === UserMode.Driver) {
        return <DriverOverlay />;
    }

    return null;
}
