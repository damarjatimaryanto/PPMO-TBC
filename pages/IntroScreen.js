import {
  StyleSheet,
  TouchableOpacity,
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
import Home from './Home';

const COLORS = {primary: '#282534', white: '#fff'};
const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '45%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '30%',
        }}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../assets/img/icon/logo_biru.png')}></Image>
      </View>
      <View style={{width: '100%', height: '20%', alignItems: 'center'}}>
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.subtitle}>
          Tekan tombol mulai untuk masuk ke dalam aplikasi PPMO TBC
        </Text>
      </View>
      <View style={{top: 40}}>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#25376A'}}>
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
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
  },

  splash_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5%',
  },
  subtitle: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
    maxWidth: '90%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: '#25376A',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 5,
    height: 50,
    width: 120,
    borderColor: '#25376A',
    borderWidth: 3,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
