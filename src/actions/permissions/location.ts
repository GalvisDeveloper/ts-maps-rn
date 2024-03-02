import { Platform, PlatformOSType } from "react-native";

import { PERMISSIONS, PermissionStatus as RNPermissionStatus, openSettings, request } from 'react-native-permissions';
import { PermissionStatus } from "../../infraestructure/interfaces/permissions"

let status: RNPermissionStatus = 'unavailable';

export const requestLocationPermission = async (): Promise<PermissionStatus> => {

    try {

        let STATUS_PLATFORM: Record<PlatformOSType, PermissionStatus> = {
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
            //TODO: return await // checkLocationPermission();
        }

        const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
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

export const checkLocationPermission = async (): Promise<PermissionStatus> => {

    try {

        let STATUS_PLATFORM: Record<PlatformOSType, PermissionStatus> = {
            ios: await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE),
            android: await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION),
            windows: 'unavailable',
            macos: 'unavailable',
            web: 'unavailable',
            native: 'unavailable',
        };

        status = STATUS_PLATFORM[Platform.OS];

        const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
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