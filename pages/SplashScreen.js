import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSettings from 'react-native-settings';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
    navig();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const navig = () => {
    setTimeout(async () => {
      navigation.navigate('IntroScreen');
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}></StatusBar>
      <Image
        style={{width: 90, height: 73}}
        source={require('../assets/img/icon/logoobat.png')}></Image>
      <Text style={styles.splash_title}>PPMO TBC</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  splash_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5%',
  },
});
