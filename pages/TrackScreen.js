import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  BackHandler,
  Alert,
  StatusBar,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calendar, CalendarList} from 'react-native-calendars';
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
export class TrackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kriteria: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          style={{backgroundColor: COLORS.white}}
          theme={{
            backgroundColor: COLORS.white,
            calendarBackground: COLORS.white,
            textSectionTitleColor: COLORS.primary,
            textSectionTitleDisabledColor: 'green',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: COLORS.primary,
            textDisabledColor: 'grey',
            dotColor: 'red',
            selectedDotColor: '#ffffff',
            arrowColor: COLORS.primary,
            disabledArrowColor: '#d9e1e8',
            monthTextColor: COLORS.primary,
            indicatorColor: COLORS.primary,
            textDayFontFamily: 'Poppins-Regular',
            textMonthFontFamily: 'Poppins-Regular',
            textDayHeaderFontFamily: 'Poppins-Regular',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
          markingType={'period'}
          markedDates={{
            '2023-01-01': {
              disabled: true,
              startingDay: true,
              color: '#FF6A6A',
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-02': {
              disabled: true,
              startingDay: true,
              color: COLORS.primary,
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-03': {
              disabled: true,
              startingDay: true,
              color: COLORS.primary,
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-04': {
              disabled: true,
              startingDay: true,
              color: 'red',
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-05': {
              disabled: true,
              startingDay: true,
              color: COLORS.primary,
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-06': {
              disabled: true,
              startingDay: true,
              color: COLORS.primary,
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-07': {
              disabled: true,
              startingDay: true,
              color: '#48CDF8',
              endingDay: true,
              textColor: 'white',
            },
            '2023-01-08': {
              disabled: true,
              startingDay: true,
              color: 'red',
              endingDay: true,
              textColor: 'white',
            },
          }}
        />
        <View style={styles.keterangan}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.primary,
              borderRadius: 35,
              marginRight: 20,
            }}></View>
          <Text style={styles.judulketerangan}>Minum Obat</Text>
        </View>
        <View style={styles.keterangan}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'red',
              borderRadius: 35,
              marginRight: 20,
            }}></View>
          <Text style={styles.judulketerangan}>Tidak Minum Obat</Text>
        </View>
      </View>
    );
  }
}

export default TrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keterangan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  judulketerangan: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});
