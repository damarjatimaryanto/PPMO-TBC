import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  TouchableOpacity,
  Button,
  StatusBar,
  AppRegistry,
  BackHandler,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
const AlarmScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.jam}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 30,
              color: 'white',
            }}>
            13 : 30
          </Text>
        </View>
        <View style={styles.keterangan}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Pasien Baru
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: 'white',
            }}>
            Fase Intensif
          </Text>
        </View>
        <View style={styles.gmbar_container}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./../assets/img/icon/bell_miss.png')}
          />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.jam}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 30,
              color: 'white',
            }}>
            18 : 15
          </Text>
        </View>
        <View style={styles.keterangan}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Pasien Lama
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: 'white',
            }}>
            Fase Lanjutan
          </Text>
        </View>
        <View style={styles.gmbar_container}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./../assets/img/icon/bell_check.png')}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.floatingbutton}
        onPress={() => navigation.navigate('BuatalarmScreen')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'grey',
              margin: 10,
            }}>
            Add
          </Text>
          <Image source={require('./../assets/img/icon/plusalarm.png')}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlarmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#25376A',
    paddingVertical: 10,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textbtn: {
    fontSize: 16,
    color: 'white',
  },
  floatingbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 90,
    right: 20,
    // width: 100,
  },
  box: {
    backgroundColor: COLORS.primary,
    height: 100,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    marginVertical: 15,
  },
  jam: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  keterangan: {
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gmbar_container: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
