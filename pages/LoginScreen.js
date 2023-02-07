import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Animated,
  Alert,
  ActivityIndicator,
  Dimensions,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSettings from 'react-native-settings';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SelectDropdown from 'react-native-select-dropdown';

const countries = ['Fase Pertama (Ke 1)', 'Fase Kedua ( Ke 2)'];
const kategori = ['Anak-anak', 'Remaja', 'Dewasa'];

const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    fetch('https://afanalfiandi.com/ppmo/api/api.php?op=login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(response => {
        setLoading(true);
        setTimeout(async () => {
          if (response != 0) {
            const uid = response.id_user;
            const fase = response.fase;
            const id_fase = response.id_fase_detail;
            const id_kat = response.id_kategori_detail;
            const kategori = response.kategori;
            const nama = response.nama;
            const username = response.username;

            AsyncStorage.setItem('loggedIn', '1');
            AsyncStorage.setItem('uid', uid);
            AsyncStorage.setItem('fase', fase);
            AsyncStorage.setItem('id_fase', id_fase);
            AsyncStorage.setItem('id_kat', id_kat);
            AsyncStorage.setItem('kategori', kategori);
            AsyncStorage.setItem('nama', nama);
            AsyncStorage.setItem('username', username);

            setLoading(false);
            navigation.navigate('Tab1');
          } else {
            Alert.alert('', 'Login Gagal!');
            setLoading(false);
          }
        }, 3000);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(false);
        }}>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </Modal>
      <View style={styles.imgContainer}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 30,
            fontFamily: 'Poppins-Bold',
          }}>
          Login
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.h1}>
          Silakan login dengan username dan password yang anda miliki
        </Text>
        <View style={styles.inputContainer}>
          <View style={{width: '15%', alignItems: 'center'}}>
            <Image
              style={{width: 24, height: 24}}
              source={require('./../assets/img/icon/person_fill.png')}
            />
          </View>
          <View style={{width: '85%'}}>
            <TextInput
              style={styles.input}
              placeholderTextColor={grey}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.h2}>Username :</Text> */}
          <View style={{width: '15%', alignItems: 'center'}}>
            <Image
              style={{width: 24, height: 24}}
              source={require('./../assets/img/icon/lock.png')}
            />
          </View>
          <View style={{width: '85%'}}>
            <TextInput
              style={styles.input}
              placeholderTextColor={black}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
        </View>

        <View style={styles.btn_Container}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              onSubmit();
            }}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer_2}>
          <Text style={styles.kamu_nanya}>Belum punya akun ? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.kamu_nanya_2}>Daftar Akun</Text>
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
    paddingTop: '50%',
  },
  formContainer: {
    paddingHorizontal: width * 0.095,
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
  },
  inputContainer_2: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_Container: {
    marginVertical: 35,
  },
  h1: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: grey,
    // textAlign: "center",
  },
  h2: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kamu_nanya: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kamu_nanya_2: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    // paddingVertical: width * 0.013,
    // paddingHorizontal: width * 0.04,
    height: 50,
    borderRadius: 10,
    color: 'black',
    // justifyContent: 'center',
    paddingTop: 17,
    // backgroundColor: "#D4D4D4",
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  inputselect: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: '100%',
    height: 45,
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
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
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
