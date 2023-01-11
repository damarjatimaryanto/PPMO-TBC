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
import {PieChart} from 'react-native-chart-kit';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const Akun = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.h2}>Nama :</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={'grey'}
            value="IniTokyoLagi"
            editable={false}
            selectTextOnFocus={false}></TextInput>
        </View>
        <View>
          <Text style={styles.h2}>Username:</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={'grey'}
            placeholder="AkuTokyo69"
            editable={false}
            selectTextOnFocus={false}></TextInput>
        </View>
        <View>
          <Text style={styles.h2}>Kategori Pasien:</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={'grey'}
            placeholder="Pasien Baru"
            editable={false}
            selectTextOnFocus={false}></TextInput>
        </View>
        <View>
          <Text style={styles.h2}>Fase Pengobatan:</Text>

          <TextInput
            style={styles.input}
            disableFullscreenUI={false}
            placeholderTextColor={'grey'}
            placeholder="Fase Intensif"
            editable={false}
            selectTextOnFocus={false}></TextInput>
        </View>
      </View>

      <PieChart
        data={[
          {
            name: 'Minum Obat',
            population: 48.0,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: 'white',
            legendFontSize: 14,
          },
          {
            name: 'Tidak Minum Obat',
            population: 39.2,
            color: 'red',
            legendFontColor: 'white',
            legendFontSize: 11,
          },
        ]}
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `white`,
          labelColor: (opacity = 1) => `white`,
          style: {
            borderRadius: 16,
          },
        }}
        backgroundColor={COLORS.primary}
        accessor="population"
        paddingLeft="15"
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <TouchableOpacity
        style={styles.floatingbutton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.white,
            margin: 10,
            fontFamily: 'Poppins-Medium',
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Akun;

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
    // position: 'absolute',
    // bottom: 90,
    paddingHorizontal: '5%',
    backgroundColor: COLORS.primary,
    width: width - 20,
    borderRadius: 10,
  },
  formContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 10,
    width: '100%',
  },
  inputContainer: {
    marginVertical: 5,
  },
  inputContainer_2: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  btn_Container: {
    marginVertical: 15,
  },
  h1: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    height: 45,
    borderRadius: 5,
    color: 'grey',
    backgroundColor: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 15,
  },
  inputselect: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: '100%',
    height: 45,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  inputTextselect: {
    color: 'grey',
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
});
