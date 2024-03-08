import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './presentation/navigation/Navigator';
import PermissionsChecker from './presentation/providers/PermissionsChecker';

import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const MapsApp = () => {
	return (
		<NavigationContainer>
			<PermissionsChecker>
				<Navigator />
			</PermissionsChecker>
		</NavigationContainer>
	);
};

export default MapsApp;

const styles = StyleSheet.create({});
