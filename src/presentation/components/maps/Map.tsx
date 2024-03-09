import React, { useRef } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ILocation } from '../../../infraestructure/interfaces/ilocation';
import FAB from '../ui/FAB';
import useLocationStore from '../../store/location/useLocationStore';

interface Props {
	showsUserLocation?: boolean;
	initialLocation: ILocation;
}

const Map = ({ showsUserLocation = true, initialLocation }: Props) => {
	const mapRef = useRef<MapView | null>();

	const { getLocation } = useLocationStore();

	const moveCameraLocation = (location: ILocation) => {
		if (mapRef.current) {
			mapRef.current.animateCamera({ center: location });
		}
	};

	const moveToCurrentLocation = async () => {
		const location = await getLocation();
		if (!location) return;
		moveCameraLocation(location);
	};

	return (
		<View style={styles.container}>
			<MapView
				ref={(map) => (mapRef.current = map!)}
				provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
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

			<FAB iconName='compass-outline' onPress={() => moveToCurrentLocation()} style={{ bottom: 20, right: 20 }} />
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
