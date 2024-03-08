import { Platform, PlatformOSType } from "react-native";

import { PERMISSIONS, PermissionStatus as RNPermissionStatus, check, openSettings, request } from 'react-native-permissions';
import { IPermissionStatus } from "../../infraestructure/interfaces/ipermissions"

let status: IPermissionStatus = 'unavailable';

export const requestLocationPermission = async (): Promise<IPermissionStatus> => {

    try {

        let STATUS_PLATFORM: Record<PlatformOSType, RNPermissionStatus> = {
            ios: await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE),
            android: await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION),
            windows: 'unavailable',
            macos: 'unavailable',
            web: 'unavailable',
            native: 'unavailable',
        };

        status = STATUS_PLATFORM[Platform.OS];

        if (status === 'blocked') {
            await openSettings();
            return await checkLocationPermission();
        }

        const permissionMapper: Record<RNPermissionStatus, IPermissionStatus> = {
            granted: 'granted',
            denied: 'denied',
            blocked: 'blocked',
            unavailable: 'unavailable',
            limited: 'limited',
        }

        return permissionMapper[status] ?? 'unavailable';

    } catch (error) {
        console.error('Error al solicitar permiso de ubicación:', error);
        return 'unavailable';
    }

}

export const checkLocationPermission = async (): Promise<IPermissionStatus> => {

    try {

        let STATUS_PLATFORM: Record<PlatformOSType, RNPermissionStatus> = {
            ios: await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE),
            android: await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION),
            windows: 'unavailable',
            macos: 'unavailable',
            web: 'unavailable',
            native: 'unavailable',
        };

        status = STATUS_PLATFORM[Platform.OS];

        const permissionMapper: Record<RNPermissionStatus, IPermissionStatus> = {
            granted: 'granted',
            denied: 'denied',
            blocked: 'blocked',
            unavailable: 'unavailable',
            limited: 'limited',
        }

        return permissionMapper[status] ?? 'unavailable';

    } catch (error) {
        console.error('Error al solicitar permiso de ubicación:', error);
        return 'unavailable';
    }

}