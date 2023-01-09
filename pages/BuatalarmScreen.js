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
import AlarmScreen from './AlarmSreen';

const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const BuatalarmScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{backgroundColor: 'grey'}}>
          <TouchableOpacity onPress={navigation.navigate('AlarmScreen')}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'blue'}}>
          <Text>Alarm Detail</Text>
        </View>
        <View style={{backgroundColor: 'grey'}}></View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={{width: 90, height: 73}}
          source={require('../assets/img/icon/logoobat_biru.png')}
        />
      </View>

      <View style={styles.formContainer}>
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
            placeholder="Pilih Ketegori"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Fase Pengobatan</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={grey}
            placeholder="Pilih Fase"></TextInput>
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

export default BuatalarmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20%',
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
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: width * 0.013,
    paddingHorizontal: width * 0.03,
    borderRadius: 5,
    color: black,
  },
  submitBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: width * 0.035,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  copyText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#B5B5B5',
  },
  ownerText: {
    color: '#F7B44C',
    fontWeight: 'bold',
  },
});
