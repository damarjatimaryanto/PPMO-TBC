import {
  StyleSheet,
  Modal,
  Pressable,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
  AppRegistry,
  Dimensions,
  BackHandler,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ['Fase Intensif (Ke 1)', 'Fase Lanjutan ( Ke 2)'];
const kategori = ['Pasien Baru', 'Pasien Lama'];

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
const blue = '#0D4AA7';
const black = '#3d3d3d';
const red = '#C74B4C';
const grey = '#5C5F68';
const AlarmScreen = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const onSubmit = () => {
    setModal(false);
  };

  const showTimePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    console.warn('A Time has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        is24Hour
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputhorizontal}>
              <TextInput
                style={styles.input_horizontal}
                placeholderTextColor={grey}
                keyboardType="number-pad"
                placeholder="13 : 30"
              />
              <TouchableOpacity
                onPress={showTimePicker}
                style={{
                  width: 43,
                  height: 43,
                  backgroundColor: COLORS.primary,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '80%', height: '80%'}}
                  source={require('./../assets/img/icon/alarm_plus.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputhorizontal}>
              <TextInput
                style={styles.input_horizontal}
                placeholderTextColor={grey}
                keyboardType="number-pad"
                placeholder="0"
              />
              <Text
                style={{
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Hari
              </Text>
            </View>

            <View
              style={[
                styles.inputhorizontal,
                {justifyContent: 'space-between'},
              ]}>
              <TouchableOpacity
                style={[styles.btn, styles.btn2]}
                onPress={() => {
                  setModal(false);
                }}>
                <Text
                  style={{color: COLORS.white, fontFamily: 'Poppins-Medium'}}>
                  Batal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, styles.btn1]}
                onPress={() => {
                  onSubmit();
                }}>
                <Text
                  style={[{color: COLORS.white, fontFamily: 'Poppins-Medium'}]}>
                  Simpan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
        onPress={() => {
          setModal(true);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              margin: 10,
              fontFamily: 'Poppins-Medium',
            }}>
            Tambah
          </Text>
          <Image
            style={{width: 24, height: 24}}
            source={require('./../assets/img/icon/alarm_plus.png')}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlarmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',

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
    width: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  box: {
    backgroundColor: COLORS.primary,
    height: 100,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    marginTop: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.4,

    elevation: 10,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    marginVertical: 40,
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  inputContainer: {
    marginVertical: 20,
  },
  inputhorizontal: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  btn_Container: {
    marginVertical: 15,
  },

  input_horizontal: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: width * 0.013,
    paddingHorizontal: width * 0.04,
    width: '82%',
    height: 45,
    borderRadius: 5,
    color: 'grey',
    backgroundColor: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    width: '48%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  btn2: {
    backgroundColor: 'grey',
    borderRadius: 5,
  },
});
