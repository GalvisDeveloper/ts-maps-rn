import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../../components/maps/Map';
import useLocationStore from '../../store/location/useLocationStore';
import LoadingScreen from '../loading/LoadingScreen';

const MapScreen = () => {
	const { lastKnownLocation } = useLocationStore();

	if (lastKnownLocation === null) return <LoadingScreen />;

	return (
		<View style={styles.ct}>
			<Map initialLocation={lastKnownLocation} />
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	ct: {
		...StyleSheet.absoluteFillObject,
		// height: 'auto',
		// width: 'auto',
		// justifyContent: 'flex-end',
		// alignItems: 'center',
	},
});
