import { create } from 'zustand';
import { requestLocationPermission, checkLocationPermission } from '../../../actions/permissions/location';
import { PermissionStatus } from '../../../infraestructure/interfaces/permissions';

interface PermissionState {
	locationStatus: PermissionStatus;
	requestLocationPermission: () => Promise<PermissionStatus>;
	checkLocationPermission: () => Promise<PermissionStatus>;
}

const usePermissionStore = create<PermissionState>()((set) => ({
	locationStatus: 'unknown',

	requestLocationPermission: async () => {
		const status = await requestLocationPermission();
		set({ locationStatus: status });
		return status;
	},

	checkLocationPermission: async () => {
		const status = await checkLocationPermission();
		set({ locationStatus: status });
		return status;
	},
}));

export default usePermissionStore;
