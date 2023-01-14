import {
  StyleSheet,
  ActivityIndicator,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Modal,
  Animated,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = { primary: '#1E319D', white: '#FFFFFF' };

const AkunScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  const [userSession, setUserSession] = useState([
    {
      uid: null,
      fase: null,
      id_kat: null,
      kategori: null,
      nama: null,
      username: null
    }
  ]);

  const getSession = async () => {
    const uid = await AsyncStorage.getItem('uid');
    const fase = await AsyncStorage.getItem('fase');
    const id_kat = await AsyncStorage.getItem('id_kat');
    const kategori = await AsyncStorage.getItem('kategori');
    const nama = await AsyncStorage.getItem('nama');
    const username = await AsyncStorage.getItem('username');

    const session = [];
    session.push({
      uid: uid,
      fase: fase,
      id_kat: id_kat,
      kategori: kategori,
      nama: nama,
      username: username
    });

    setUserSession(session);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const onLogout = async () => {
    await AsyncStorage.removeItem('loggedIn');
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('LoginScreen');
      setLoading(false);
    }, 2000);

  }
  const pieData = [
    { value: 70, color: COLORS.primary },
    { value: 30, color: 'lightgray' },
  ];

  useEffect(() => {
    getSession();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(false);
        }}
      >
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </Modal>
      {loading != true && (
        <View>
          <View style={styles.box}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
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
                <Text style={styles.ket_isi}>{userSession[0].nama}</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
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
                <Text style={styles.ket_isi}>{userSession[0].username}</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
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
                <Text style={styles.ket_isi}>{userSession[0].kategori}</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
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
                <Text style={styles.ket_isi}>{userSession[0].fase}</Text>
              </View>
            </View>
          </View>

          <View style={styles.box_2}>
            <PieChart
              donut
              innerRadius={80}
              data={pieData}
              centerLabelComponent={() => {
                return <Text style={{ fontSize: 30, color: 'grey' }}>70%</Text>;
              }}
            />
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => { onLogout() }}
              style={{ flexDirection: 'row', width: '100%' }}>
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
      )}
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
  img_style: { height: 20, width: 20 },
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
