import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/styles';

const LoadingScreen = () => {
	return (
		<View style={globalStyles.ctGlobal}>
			<ActivityIndicator size={50} color={'green'} />
			<Text style={globalStyles.text}>LoadingScreen</Text>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({});
