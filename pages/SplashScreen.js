import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSettings from 'react-native-settings';

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
    }, 4000);
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: 300, height: 270}}
        source={require('../assets/img/icon/splash.png')}></Image>
      <Text style={styles.splash_title}>PPMO TBC</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25376A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  splash_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5%',
  },
});
