import React, {useState} from 'react';
import { 
	Text, 
	View, 
	TextInput, 
	TouchableOpacity, 
	Platform, 
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
} from 'react-native';
import { styles } from '../RegistrationScreen/RegistrationScreen.styles';


const initialStateInput = {
	login: '',
	email: '',
	password: '',
};

export const RegistrationScreen = ({
	isShowKeyboard,
    setIsShowKeyboard,
    keyboardHide,
    dimensions,
}) => {
	const [stateInputText, setStateInputText] = useState(initialStateInput);
	const [isFocusInput, setIsFocusInput] = useState({
		login: false,
		email: false,
		password: false,
	});

    const onSubmit = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		setStateInputText(initialStateInput);
		console.log(stateInputText);
    };

    return (
	<TouchableWithoutFeedback onPress={() => keyboardHide()}>
	<KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={styles.wrapper}
	>
	<View 
        style={{
            ...styles.form, 
            paddingBottom: isShowKeyboard ? 32 : 92,
            width: dimensions,
			}}
        >
		<View style={styles.avatar}>
            <TouchableOpacity style={styles.buttonAvatar} onPress={() => {}}>
				<Text style={styles.buttonAvatarText}>{'+'}</Text>
            </TouchableOpacity>
        </View>
        <View>
		<Text style={styles.title}>Registration</Text>
        <TextInput 
            placeholder="Login"
			inputMode="text"
			style={{
				...styles.input,
				borderColor: isFocusInput.login 
					? "#FF6C00" : "#F6F6F6",
                backgroundColor: isFocusInput.login 
					? "#FFFFFF" : "#F6F6F6",
            }}
            value={stateInputText.login}
            onFocus ={() => {
				setIsShowKeyboard(true),
				setIsFocusInput({
					...isFocusInput,
					login: true,
				});
			}}
			onBlur={() => {
                setIsFocusInput({
                ...isFocusInput,
                login: false,
                });
            }}
            onChangeText={(value) => setStateInputText((prevState) => ({...prevState, login: value}))}
            />
			<TextInput 
            placeholder="Email addres"
			inputMode="text"
			style={{
				...styles.input,
				borderColor: isFocusInput.email 
					? "#FF6C00" : "#F6F6F6",
                backgroundColor: isFocusInput.email
					? "#FFFFFF" : "#F6F6F6",
            }}
            value={stateInputText.email}
            onFocus ={() => {
				setIsShowKeyboard(true),
				setIsFocusInput({
					...isFocusInput,
					email: true,
				});
			}}
			onBlur={() => {
                setIsFocusInput({
                ...isFocusInput,
                email: false,
                });
            }}
            onChangeText={(value) => setStateInputText((prevState) => ({...prevState, email: value}))}
            />
			
			<TextInput 
            placeholder="Password"
			inputMode="text"
			style={{
				...styles.input,
				borderColor: isFocusInput.password 
					? "#FF6C00" : "#F6F6F6",
                backgroundColor: isFocusInput.password
					? "#FFFFFF" : "#F6F6F6",
            }}
            value={stateInputText.password}
			secureTextEntry={true} 
            onFocus ={() => {
				setIsShowKeyboard(true),
				setIsFocusInput({
					...isFocusInput,
					password: true,
				});
			}}
			onBlur={() => {
                setIsFocusInput({
                ...isFocusInput,
                password: false,
                });
            }}
            onChangeText={(value) => setStateInputText((prevState) => ({...prevState, password: value}))}
            />
        </View>
		
		<View style={{ display: isShowKeyboard ? 'none' : 'flex' }}>
            <TouchableOpacity 
			style={styles.buttonForm} 
			onPress={() => onSubmit()}
			>
				<Text style={styles.buttonFormText}>Create account</Text>
            </TouchableOpacity>
            <Text style={styles.link}>Do you already have an account? Sign in</Text>
        </View>
        </View>
		</KeyboardAvoidingView>
	</TouchableWithoutFeedback>
    );
}

