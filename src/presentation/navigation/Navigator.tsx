import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/maps/MapScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';

export type RootStackParamList = {
	Maps: undefined;
	Permissions: undefined;
	Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Loading'
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: 'white' },
			}}
		>
			<Stack.Screen name='Maps' component={MapScreen} />
			<Stack.Screen name='Permissions' component={PermissionsScreen} />
			<Stack.Screen name='Loading' component={LoadingScreen} />
			{/*<Stack.Screen name='Settings' component={Settings} /> */}
		</Stack.Navigator>
	);
};

export default Navigator;
