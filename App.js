import React, {useState, useEffect, useCallback} from 'react';
import { 
  StyleSheet,  
  View, 
  ImageBackground, 
  Platform, 
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {RegistrationScreen} from './screens/RegistrationScreen/RegistrationScreen';


SplashScreen.preventAutoHideAsync();

export default function App() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 20 * 2
    );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      console.log("width", width);
      setDimensions(width);
    };
      Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
          "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
          "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }

  return (
    <TouchableWithoutFeedback 
      onPress={keyboardHide} 
      onLayout={onLayoutRootView}
      >
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/images/background-photo.jpg')}
        >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
      <RegistrationScreen
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
          keyboardHide={keyboardHide}
          dimensions={dimensions}
          />
        </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

