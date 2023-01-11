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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SelectDropdown from 'react-native-select-dropdown';

const countries = ['Fase Intensif (Ke 1)', 'Fase Lanjutan ( Ke 2)'];
const kategori = ['Pasien Baru', 'Pasien Lama'];

const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 30,
            fontFamily: 'Poppins-Bold',
          }}>
          Daftar Akun
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Nama Lengkap :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            placeholder="Masukkan Nama Lengkap Anda"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Username :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            placeholder="Masukkan Username"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Password :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            placeholder="Masukkan Password"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Kategori Pasien :</Text>
          <SelectDropdown
            data={kategori}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Pilih Kategori Pasien'}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            renderDropdownIcon={isOpened => {
              return (
                <Image
                  style={{width: 20, height: 10}}
                  source={
                    isOpened
                      ? require('./../assets/img/icon/down.png')
                      : require('./../assets/img/icon/up.png')
                  }
                />
              );
            }}
            dropdownIconPosition={'right'}
            buttonStyle={styles.inputselect}
            buttonTextStyle={styles.inputTextselect}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.rowstyle}
            rowTextStyle={styles.rowtext}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Fase Pengobatan :</Text>
          <SelectDropdown
            data={kategori}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Pilih Fase Pengobatan'}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            renderDropdownIcon={isOpened => {
              return (
                <Image
                  style={{width: 20, height: 10}}
                  source={
                    isOpened
                      ? require('./../assets/img/icon/down.png')
                      : require('./../assets/img/icon/up.png')
                  }
                />
              );
            }}
            dropdownIconPosition={'right'}
            buttonStyle={styles.inputselect}
            buttonTextStyle={styles.inputTextselect}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.rowstyle}
            rowTextStyle={styles.rowtext}
          />
        </View>

        <View style={styles.btn_Container}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.btnText}>Buat Akun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '10%',
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
    color: 'grey',
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: width * 0.013,
    paddingHorizontal: width * 0.04,
    height: 50,
    borderRadius: 5,
    color: 'grey',
    backgroundColor: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 9,
  },
  inputselect: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: '100%',
    height: 50,
    borderRadius: 5,
    color: black,
    backgroundColor: 'white',
  },
  inputTextselect: {
    color: 'grey',
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  dropdownStyle: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 2,
  },
  rowStyle: {
    borderBottomColor: COLORS.primary,
    backgroundColor: 'white',
  },
  rowtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 15,
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
