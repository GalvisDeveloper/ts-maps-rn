import { create } from 'zustand';
import { requestLocationPermission, checkLocationPermission } from '../../../actions/permissions/permissionLocation';
import { IPermissionStatus } from '../../../infraestructure/interfaces/ipermissions';

interface PermissionState {
	locationStatus: IPermissionStatus;
	requestLocationPermission: () => Promise<IPermissionStatus>;
	checkLocationPermission: () => Promise<IPermissionStatus>;
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
