import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Animated,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSettings from 'react-native-settings';
import {TextInput} from 'react-native-gesture-handler';

const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#282534', white: '#fff'};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{width: width * 0.21, height: height * 0.1}}
          source={require('../assets/img/icon/logo_biru.png')}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.h1}>Pastikan Data yang diinputkan benar</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Nama Lengkap</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            placeholder="Masukkan Nama Lengkap Anda"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Kategori usia</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={grey}
            placeholder="Masukkan Password Anda"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Fase Pengobatan</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={grey}
            placeholder="Masukkan Password Anda"></TextInput>
        </View>
        <View style={styles.btn_Container}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  formContainer: {
    paddingHorizontal: width * 0.055,
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 5,
  },
  btn_Container: {
    marginVertical: 15,
  },
  h1: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: grey,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#25376A',
  },
  input: {
    borderWidth: 2,
    borderColor: '#25376A',
    paddingVertical: width * 0.013,
    paddingHorizontal: width * 0.03,
    borderRadius: 5,
    marginTop: 10,
    color: black,
  },
  submitBtn: {
    backgroundColor: '#25376A',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'white',
  },
  copyText: {
    fontWeight: 'bold',
    color: '#B5B5B5',
  },
  ownerText: {
    color: '#F7B44C',
    fontWeight: 'bold',
  },
});
