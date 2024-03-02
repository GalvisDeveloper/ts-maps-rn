import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/maps/MapScreen';

const Stack = createStackNavigator();

const Navigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Maps' component={MapScreen} />
			{/*<Stack.Screen name='Notifications' component={Notifications} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Settings' component={Settings} /> */}
		</Stack.Navigator>
	);
};

export default Navigator;
