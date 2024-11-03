import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
	},
	form: {
		paddingTop: 92,
		paddingHorizontal: 16,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor: '#fff',
	},
	avatar: {
		position: 'absolute',
		top: -60,
		height: 120,
		width: 120,
		alignSelf: 'center',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		borderRadius: 16,
		backgroundColor: '#F6F6F6',
	},
	buttonAvatar: {
		top: -14,
		right: -13,
		height: 25,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#FF6C00',
		backgroundColor: '#ffffff',
	},
	buttonAvatarText: {
		color: '#FF6C00',
	},
	title: {
		marginBottom: 16,
		alignSelf: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 30,
		fontWeight: 500,
		lineHeight: 35,
	},
	input: {
		height: 50,
		marginTop: 16,
		padding: 16,
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		borderRadius: 8,
		borderWidth: 1,
	},
	buttonPassword: {
		position: 'absolute',
		top: 21,
		right: 6,
		zIndex: 1000,
		padding: 10,
		alignSelf: 'flex-end',
	},
	buttonPasswordText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#1B4371',
	},
	buttonForm: {
		height: 51,
		marginTop: 43,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#FF6C00',
	},
	buttonFormText: {
		alignItems: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#fff',
	},
	link: {
		marginTop: 16,
		alignSelf: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#1B4371',
	},
});
