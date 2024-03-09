import { Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
	iconName: string;
	style?: StyleProp<ViewStyle>;

	onPress: () => void;
}

const FAB = ({ iconName, style = {}, onPress }: Props) => {
	return (
		<View style={[styles.btn, style]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
				]}
			>
				<Icon name={iconName} size={30} color={'white'} />
			</Pressable>
		</View>
	);
};

export default FAB;

const styles = StyleSheet.create({
	btn: {
		zIndex: 1,
		position: 'absolute',
		height: 50,
		width: 50,
		borderRadius: 30,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 4.5,
			height: 0.27,
		},
		elevation: 5,
	},
});
