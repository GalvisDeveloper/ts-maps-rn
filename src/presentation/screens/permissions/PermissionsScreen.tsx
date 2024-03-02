import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/styles';
import usePermissionStore from '../../store/permissions/usePermissionStore';

const PermissionsScreen = () => {
	const { locationStatus, requestLocationPermission } = usePermissionStore();

	return (
		<View style={styles.ct}>
			<Pressable style={globalStyles.btnPrimary} onPress={requestLocationPermission}>
				<Text style={{ ...globalStyles.text, color: 'white' }}>Enable Location</Text>
			</Pressable>

			<Text style={globalStyles.text}>Status: {locationStatus}</Text>
		</View>
	);
};

export default PermissionsScreen;

const styles = StyleSheet.create({
	ct: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
