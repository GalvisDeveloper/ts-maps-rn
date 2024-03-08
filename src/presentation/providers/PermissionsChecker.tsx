import { PropsWithChildren, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import usePermissionStore from '../store/permissions/usePermissionStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigator';
import { IPermissionStatus } from '../../infraestructure/interfaces/ipermissions';

const PermissionsChecker = ({ children }: PropsWithChildren) => {
	const { locationStatus, checkLocationPermission } = usePermissionStore();
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		const NAVIGATE_TO: Record<IPermissionStatus, keyof RootStackParamList> = {
			granted: 'Maps',
			denied: 'Permissions',
			blocked: 'Permissions',
			unavailable: 'Permissions',
			limited: 'Permissions',
			unknown: 'Loading',
		};

		const screen = NAVIGATE_TO[locationStatus];

		if (locationStatus === 'granted') return navigation.reset({ routes: [{ name: screen }] });
		navigation.navigate(screen);
	}, [locationStatus]);

	useEffect(() => {
		checkLocationPermission();
	}, []);

	useEffect(() => {
		const subscription = AppState.addEventListener('change', (nextAppState) => {
			if (nextAppState === 'active') {
				checkLocationPermission();
			}
		});

		return () => {
			subscription.remove();
		};
	}, []);

	return <>{children}</>;
};

export default PermissionsChecker;
