import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoadingScreen = () => {
	return (
		<View>
			<Text style={styles.txt}>LoadingScreen</Text>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({
	txt: {
		color: 'red',
	},
});
