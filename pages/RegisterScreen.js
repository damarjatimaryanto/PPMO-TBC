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
  Modal,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSettings from 'react-native-settings';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SelectDropdown from 'react-native-select-dropdown';
import {useState} from 'react';

const countries = [
  {
    id: 1,
    fase: 'Fase Intensif (Ke 1)',
  },
  {
    id: 2,
    fase: 'Fase Lanjutan ( Ke 2)',
  },
];
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
  const [modal, setModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={{width: width - 20}}>
      <TouchableOpacity
        style={{width: '100%', height: 40}}
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
            paddingLeft: 20,
            paddingVertical: 8,
          }}>
          {item.kategori}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const renderFase = ({item}) => (
    <View style={{width: width - 20}}>
      <TouchableOpacity
        style={{width: '100%', height: 40}}
        onPress={() => {
          setFase(item.id_fase_detail);
          setFaseLabel(item.fase);
          setModal(false);
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: 'black',
            paddingLeft: 20,
            paddingVertical: 8,
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
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '95%', justifyContent: 'center'}}>
                <FlatList
                  data={dataKat}
                  renderItem={renderItem}
                  keyExtractor={item => item.id_kategori_detail}
                />
              </View>
              <View
                style={{
                  width: '5%',
                  // backgroundColor: 'blue',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{paddingTop: 5, paddingRight: 5}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Image
                    style={{width: 15, height: 15}}
                    source={require('./../assets/img/icon/delete2.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Fase Kesehatan */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '95%', justifyContent: 'center'}}>
                <FlatList
                  data={dataFase}
                  renderItem={renderFase}
                  keyExtractor={item => item.id_fase_detail}
                />
              </View>
              <View
                style={{
                  width: '5%',
                  // backgroundColor: 'blue',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{paddingTop: 5, paddingRight: 5}}
                  onPress={() => {
                    setModal(false);
                  }}>
                  <Image
                    style={{width: 15, height: 15}}
                    source={require('./../assets/img/icon/delete2.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
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
          Daftar Akun
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Nama Lengkap :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            onChangeText={setNama}
            value={nama}
            placeholder="Masukkan Nama Lengkap Anda"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Username :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={grey}
            onChangeText={setUsername}
            value={username}
            placeholder="Masukkan Username"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Password :</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={grey}
            onChangeText={setPassword}
            value={password}
            placeholder="Masukkan Password"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.h2}>Kategori Pasien :</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[styles.input, {alignItems: 'flex-start'}]}>
            {kat == null && (
              <Text
                style={{
                  fontSize: 16,
                  color: 'grey',
                  fontFamily: 'Poppins-Regular',
                }}>
                Pilih Kategori Pasien
              </Text>
            )}
            {kat != null && (
              <Text
                style={{
                  fontSize: 16,
                  color: 'grey',
                  fontFamily: 'Poppins-Regular',
                }}>
                {katLabel}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {kat == 2 && (
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Fase Pengobatan :</Text>
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={[styles.input, {alignItems: 'flex-start'}]}>
              {fase == null && (
                <Text
                  style={{
                    fontSize: 16,
                    color: 'grey',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Pilih Fase Pengobatan
                </Text>
              )}
              {fase != null && (
                <Text
                  style={{
                    fontSize: 16,
                    color: 'grey',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {faseLabel}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* <View style={styles.inputContainer}>
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
        </View> */}

        <View style={styles.btn_Container}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              onSubmit();
            }}>
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
    // opacity: modalVisible = true ? 0.5 : 1,
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
});
