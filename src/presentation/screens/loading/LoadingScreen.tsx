import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const LoadingScreen = () => {
	const [loading, setLoading] = useState(true);

	let something = '';

	const todo = () => {
		return new Promise((resolve, reject) => {
			if (true) {
				resolve('success');
			} else {
				reject('error');
			}
		});
	};

	console.log({ something, loading });
	console.log(todo());

	return (
		<View>
			<Text>LoadingScreen</Text>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({});
