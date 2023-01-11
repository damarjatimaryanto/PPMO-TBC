import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const AkunScreen = () => {
  const navigation = useNavigation();

  const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];
  const pieData = [
    {value: 70, color: COLORS.primary},
    {value: 30, color: 'lightgray'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.box_image}>
            <Image
              style={styles.img_style}
              source={require('./../assets/img/icon/nama_user.png')}
            />
          </View>
          <View style={styles.judul_style}>
            <Text style={styles.judul_isi}>Nama</Text>
          </View>
          <View style={styles.ket_style}>
            <Text style={styles.ket_isi}>Damarjati Maryanto</Text>
          </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.box_image}>
            <Image
              style={styles.img_style}
              source={require('./../assets/img/icon/username_user.png')}
            />
          </View>
          <View style={styles.judul_style}>
            <Text style={styles.judul_isi}>Username</Text>
          </View>
          <View style={styles.ket_style}>
            <Text style={styles.ket_isi}>damar69</Text>
          </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.box_image}>
            <Image
              style={styles.img_style}
              source={require('./../assets/img/icon/kategori_pasien.png')}
            />
          </View>
          <View style={styles.judul_style}>
            <Text style={styles.judul_isi}>Kategori Pasien</Text>
          </View>
          <View style={styles.ket_style}>
            <Text style={styles.ket_isi}>Baru</Text>
          </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.box_image}>
            <Image
              style={styles.img_style}
              source={require('./../assets/img/icon/fase_pasien.png')}
            />
          </View>
          <View style={styles.judul_style}>
            <Text style={styles.judul_isi}>Fase Pengobatan</Text>
          </View>
          <View style={styles.ket_style}>
            <Text style={styles.ket_isi}>Intensif</Text>
          </View>
        </View>
      </View>

      <View style={styles.box_2}>
        <PieChart
          donut
          innerRadius={80}
          data={pieData}
          centerLabelComponent={() => {
            return <Text style={{fontSize: 30, color: 'grey'}}>70%</Text>;
          }}
        />
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.box_image}>
            <Image
              style={styles.img_style}
              source={require('./../assets/img/icon/logout.png')}
            />
          </View>
          <View style={styles.judul_style}>
            <Text style={styles.judul_isi}>Logout</Text>
          </View>
          <View style={styles.ket_style}>
            <Text style={styles.ket_isi}></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AkunScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: width - 15,
    paddingHorizontal: '2%',
    marginTop: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.4,

    elevation: 5,
  },

  box_2: {
    backgroundColor: '#FFFFFF',
    width: width - 15,
    paddingHorizontal: '2%',
    marginTop: 5,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.4,

    elevation: 5,
  },
  box_image: {
    // backgroundColor: 'grey',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_style: {height: 20, width: 20},
  judul_style: {
    // backgroundColor: 'green',
    width: '40%',
    justifyContent: 'center',
  },
  judul_isi: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
  ket_style: {
    // backgroundColor: 'blue',
    width: '50%',
    justifyContent: 'center',
    paddingRight: 5,
  },
  ket_isi: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'right',
    color: COLORS.primary,
  },
});
