import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './presentation/navigation/Navigator';

const MapsApp = () => {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};

export default MapsApp;

const styles = StyleSheet.create({});
