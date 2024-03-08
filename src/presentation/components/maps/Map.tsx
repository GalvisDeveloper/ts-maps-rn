import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ILocation } from '../../../infraestructure/interfaces/ilocation';

interface Props {
	showsUserLocation?: boolean;
	initialLocation: ILocation;
}

const Map = ({ showsUserLocation = true, initialLocation }: Props) => {
	return (
		<View style={styles.container}>
			<MapView
				provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
					latitude: initialLocation.latitude,
					longitude: initialLocation.longitude,
					latitudeDelta: initialLocation.latitudeDelta || 0.015,
					longitudeDelta: initialLocation.longitudeDelta || 0.0121,
				}}
				showsUserLocation={showsUserLocation}
			>
				{/* <Marker
					coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
					title='This is the only one mark'
					description='Description of the mark'
					image={require('../../../assets/customMarker.jpg')}
				/> */}
			</MapView>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: 'auto',
		width: 'auto',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
