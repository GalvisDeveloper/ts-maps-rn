import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILocation } from '../../../infraestructure/interfaces/ilocation';
import { create } from 'zustand';
import { getCurrentLocation } from '../../../actions/location/actionLocation';

interface LocationState {
	lastKnownLocation: ILocation | null;

	getLocation: () => Promise<ILocation | null>;
}

const useLocationStore = create<LocationState>()((set, get) => ({
	lastKnownLocation: null,

	getLocation: async () => {
		try {
			const location = await getCurrentLocation();
			set({ lastKnownLocation: location });
			return location;
		} catch (error) {
			console.error('Error getting location:', error);
			return null;
		}
	},
}));

export default useLocationStore;

const styles = StyleSheet.create({});
