import {
  StyleSheet,
  TouchableOpacity,
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

const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
const IntroScreen = () => {
  const navigation = useNavigation();

  const onStart = async () => {
    try {
      await AsyncStorage.setItem('intro', '1');
      navigation.navigate('LoginScreen');
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.logo_container}>
        <Image
          style={{width: 90, height: 73}}
          source={require('../assets/img/icon/logoobat.png')}></Image>
      </View>
      <View style={{width: '100%', height: '20%', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: COLORS.white,
            fontSize: 40,
            marginTop: 20,
            textAlign: 'center',
          }}>
          Selamat Datang
        </Text>
        <Text style={styles.subtitle}>
          Tekan tombol mulai untuk masuk ke dalam aplikasi PPMO TBC
        </Text>
      </View>
      <View style={{top: 40}}>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            onStart();
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: 'bold',
              color: COLORS.primary,
              fontFamily: 'Poppins-Medium',
            }}>
            Mulai
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,

    alignItems: 'center',
  },
  logo_container: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },

  splash_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: '5%',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    maxWidth: '90%',
    textAlign: 'center',
    // lineHeight: 23,
    fontFamily: 'Poppins-LightItalic',
  },
  title: {
    color: COLORS.primary,
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    borderRadius: 13,
    height: 50,
    width: 200,
    borderColor: COLORS.primary,
    borderWidth: 3,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
