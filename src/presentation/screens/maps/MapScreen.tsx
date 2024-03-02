import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../config/theme/styles';

const MapScreen = () => {
	return (
		<View style={styles.ct}>
			<Text style={globalStyles.text}>MapScreen</Text>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	ct: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
