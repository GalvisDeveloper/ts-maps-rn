import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/styles';

const LoadingScreen = () => {
	return (
		<View style={globalStyles.ctGlobal}>
			<Text style={globalStyles.text}>LoadingScreen</Text>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({});
