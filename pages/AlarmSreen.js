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
  const [shouldShow, setShouldShow] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            color: COLORS.primary,
          }}>
          Alarm
        </Text>
      </View>
      <View>
        <View>
          <Text></Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.floatingbutton}
        // onPress={navigation.navigate('LoginScreen')}
      >
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
});
