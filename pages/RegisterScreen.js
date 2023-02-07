import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
  View,
  Animated,
  Alert,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Modal from 'react-native-modal';

const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const RegisterScreen = () => {
  const navigation = useNavigation();
  // const [fontsLoaded] = useFonts({
  //   "Poppins-Bold": require("./../assets/fonts/Poppins-Bold.ttf"),
  //   "Poppins-Regular": require("./../assets/fonts/Poppins-Regular.ttf"),
  //   "Poppins-SemiBold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-Medium": require("./../assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-LightItalic": require("./../assets/fonts/Poppins-LightItalic.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  const [isModalVisible_2, setModalVisible_2] = useState(false);

  const toggleModal_2 = () => {
    setModalVisible_2(!isModalVisible_2);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [loading, setLoading] = useState(false);
  const [dataKat, setDataKat] = useState([]);
  const [dataFase, setDataFase] = useState([]);

  const [nama, setNama] = useState();
  const [fase, setFase] = useState();
  const [faseLabel, setFaseLabel] = useState('Fase Insentif');
  const [kat, setKat] = useState();
  const [katLabel, setKatLabel] = useState();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    getKategori();
    getFase();
  }, []);

  const getKategori = () => {
    fetch('https://afanalfiandi.com/ppmo/api/api.php?op=getKategori', {})
      .then(res => res.json())
      .then(response => {
        setDataKat(response);
      });
  };

  const getFase = () => {
    fetch('https://afanalfiandi.com/ppmo/api/api.php?op=getFase', {})
      .then(res => res.json())
      .then(response => {
        setDataFase(response);
      });
  };
  const onSubmit = async () => {
    fetch('https://afanalfiandi.com/ppmo/api/api.php?op=register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: nama,
        kategori: kat,
        fase: fase,
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(response => {
        setLoading(true);
        setTimeout(() => {
          if (response == 1) {
            Alert.alert('', 'Registrasi Berhasil!');
            navigation.navigate('LoginScreen');
          } else {
            Alert.alert('', 'Registrasi Gagal!');
          }
        }, 3000);
      });
  };

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={{
          // width: "100%",
          height: 40,
          backgroundColor: 'white',
          justifyContent: 'center',
          // alignItems: "center",
          borderRadius: 10,
          marginVertical: 4,
        }}
        onPress={() => {
          setKat(item.id_kategori_detail);
          setKatLabel(item.kategori);
          setFase('1');
          setModalVisible(false);
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: 'black',
            paddingLeft: 70,
            paddingVertical: 8,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          {item.kategori}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderFase = ({item}) => (
    <View>
      <TouchableOpacity
        style={{
          // width: "100%",
          height: 40,
          backgroundColor: 'white',
          justifyContent: 'center',
          // alignItems: "center",
          borderRadius: 10,
          marginVertical: 4,
        }}
        onPress={() => {
          setFase(item.id_fase_detail);
          setFaseLabel(item.fase);
          setModalVisible_2(false);
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: 'black',
            paddingLeft: 70,
            paddingVertical: 8,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          {item.fase}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Modal Kategori Pasien */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationOutTiming={1000}
        animationInTiming={1000}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: "white",
              width: width * 0.6,
              borderRadius: 10,
            }}>
            <FlatList
              data={dataKat}
              renderItem={renderItem}
              keyExtractor={item => item.id_kategori_detail}
            />
          </View>
        </View>
      </Modal>

      {/* Modal FASE PENGOBATAN */}
      <Modal
        isVisible={isModalVisible_2}
        onBackdropPress={() => setModalVisible_2(false)}
        animationOutTiming={1000}
        animationInTiming={1000}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: "white",
              width: width * 0.6,
              borderRadius: 10,
            }}>
            <FlatList
              data={dataFase}
              renderItem={renderFase}
              keyExtractor={item => item.id_fase_detail}
            />
          </View>
        </View>
      </Modal>

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
          {/* <Text style={styles.h2}>Username :</Text> */}
          <View style={{width: '15%', alignItems: 'center'}}>
            <Image
              style={{width: 24, height: 24}}
              source={require('./../assets/img/icon/person_fill.png')}
            />
          </View>
          <View style={{width: '85%'}}>
            <TextInput
              style={styles.input}
              placeholderTextColor={black}
              onChangeText={setNama}
              value={nama}
              placeholder="Nama Lengkap"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.h2}>Username :</Text> */}
          <View style={{width: '15%', alignItems: 'center'}}>
            <Image
              style={{width: 24, height: 24}}
              source={require('./../assets/img/icon/person_fill.png')}
            />
          </View>
          <View style={{width: '85%'}}>
            <TextInput
              style={styles.input}
              placeholderTextColor={black}
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
              placeholder="Password"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.h2}>Username :</Text> */}
          <View style={{width: '15%', alignItems: 'center'}}>
            <Image
              style={{width: 24, height: 24}}
              source={require('./../assets/img/icon/kategori_fill.png')}
            />
          </View>
          <View style={{width: '85%'}}>
            <TouchableOpacity onPress={toggleModal} style={[styles.input]}>
              {kat == null && (
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    alignItems: 'center',
                  }}>
                  Pilih Kategori Pasien
                </Text>
              )}
              {kat != null && (
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {katLabel}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {kat == 2 && (
          <View style={styles.inputContainer}>
            {/* <Text style={styles.h2}>Fase Pengobatan :</Text> */}
            <View style={{width: '15%', alignItems: 'center'}}>
              <Image
                style={{width: 24, height: 24}}
                source={require('./../assets/img/icon/fase_fill.png')}
              />
            </View>
            <View style={{width: '85%'}}>
              <TouchableOpacity
                onPress={toggleModal_2}
                style={[styles.input, {alignItems: 'flex-start'}]}>
                {fase == null && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Pilih Fase Pengobatan
                  </Text>
                )}
                {fase != null && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {faseLabel}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.btn_Container}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              onSubmit();
            }}>
            <Text style={styles.btnText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer_2}>
          <Text style={styles.kamu_nanya}>Sudah punya akun ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.kamu_nanya_2}>Masuk</Text>
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
    paddingTop: '40%',
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
  btn_Container: {
    marginVertical: 35,
  },
  h1: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: grey,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    // paddingVertical: width * 0.013,
    // paddingHorizontal: width * 0.04,
    height: 50,
    borderRadius: 10,
    color: 'black',
    paddingTop: 6,
    // backgroundColor: "#D4D4D4",
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',

    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 2,
    //   height: 5,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 9,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputContainer_2: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
});
