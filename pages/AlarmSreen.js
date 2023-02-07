import {
  StyleSheet,
  Modal,
  ActivityIndicator,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // const [modal, setModal] = useState(false);
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(null);
  // const [userData, setUserData] = useState([
  //   {
  //     fase: '',
  //     kategori: '',
  //     id_kat: '',
  //     id_fase: '',
  //   },
  // ]);
  // const [hari, setHari] = useState();
  // const [jam, setJam] = useState('00:00');

  // const onSubmit = async () => {
  //   const id_user = await AsyncStorage.getItem('uid');

  //   fetch('https://afanalfiandi.com/ppmo/api/api.php?op=insAlarm', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: id_user,
  //       hari: hari,
  //       jam: jam,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(resp => {
  //       setLoading(true);
  //       setTimeout(() => {
  //         if (resp == 1) {
  //           Alert.alert('', 'Alarm berhasil ditambahkan');
  //           setLoading(false);
  //           getAlarm();
  //         } else {
  //           Alert.alert('', 'Alarm gagal ditambahkan');
  //           setLoading(false);
  //         }
  //       }, 2000);
  //     });
  //   setModal(false);
  // };

  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [datePickerVisible, setDatePickerVisible] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisible(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisible(false);
  // };

  // const handleConfirm = date => {
  //   const time = moment(date).format('HH:mm');
  //   setJam(time);

  //   hideDatePicker();
  // };

  // const getAlarm = async () => {
  //   const uid = await AsyncStorage.getItem('uid');

  //   fetch('https://afanalfiandi.com/ppmo/api/api.php?op=getAlarm', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: uid,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(resp => {
  //       setLoading(true);
  //       setTimeout(async () => {
  //         const fase = await AsyncStorage.getItem('fase');
  //         const kategori = await AsyncStorage.getItem('kategori');
  //         const id_kat = await AsyncStorage.getItem('id_kat');
  //         const id_fase = await AsyncStorage.getItem('id_fase');

  //         const userSession = [];
  //         userSession.push({
  //           fase: fase,
  //           kategori: kategori,
  //           id_kat: id_kat,
  //           id_fase: id_fase,
  //         });

  //         setUserData(userSession);
  //         if (resp != 0) {
  //           const id_alarm = resp.id_alarm;
  //           const id_user = resp.id_user;
  //           const jam = resp.jam;
  //           const hari = resp.hari;

  //           const result = [];
  //           result.push({
  //             id_alarm: id_alarm,
  //             id_user: id_user,
  //             jam: jam,
  //             hari: hari,
  //           });

  //           setData(result);
  //           setLoading(false);
  //         } else {
  //           setData(null);
  //           setLoading(false);
  //         }

  //         console.log(data);
  //       }, 2000);
  //     });
  // };

  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-channel',
  //     channelName: 'Test Channel',
  //   });
  // };

  // const handleNotification = () => {
  //   PushNotification.localNotification({
  //     channelId: 'test-channel',
  //     title: 'My Notification Title',
  //     message: 'Ini Notifikasi Ku',
  //     playSound: true,
  //     soundName: 'alarm.mp3',

  //     onNotification: function (notification) {
  //       console.log(notification);

  //       const navigation = useNavigation();
  //       navigation.navigate('Konfirmasi');
  //     },
  //   });
  // };
  // useEffect(() => {
  //   getAlarm();
  // createChannels();
  // handleNotification();
  // }, []);
  return (
    <View style={[styles.container, {padding: 15}]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    // position: 'absolute',
    // bottom: 90,
    // right: 20,
    width: '80%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  box: {
    backgroundColor: COLORS.primary,
    height: 100,
    width: '95%',
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
    flex: 1,
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
    justifyContent: 'space-between',
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  input_horizontal_2: {
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    paddingVertical: width * 0.013,
    paddingHorizontal: width * 0.04,
    width: '82%',
    height: 45,
    borderRadius: 5,

    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
