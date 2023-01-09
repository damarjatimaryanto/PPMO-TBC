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
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const COLORS = {primary: '#1E319D', white: '#FFFFFF'};

const PresentaseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
          Presentase
        </Text>
      </View>
      <ScrollView>
        <BarChart
          data={{
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 50} // from react-native
          height={220}
          yAxisLabel={'Rp'}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'black',
            backgroundGradientTo: COLORS.primary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            barPercentage: 1,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <ContributionGraph
          values={[
            {date: '2017-01-02', count: 1},
            {date: '2017-01-03', count: 2},
            {date: '2017-01-04', count: 3},
            {date: '2017-01-05', count: 4},
            {date: '2017-01-06', count: 5},
            {date: '2017-01-30', count: 2},
            {date: '2017-01-31', count: 3},
            {date: '2017-03-01', count: 2},
            {date: '2017-04-02', count: 4},
            {date: '2017-03-05', count: 2},
            {date: '2017-02-30', count: 4},
          ]}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={Dimensions.get('window').width - 50} // from react-native
          height={220}
          chartConfig={{
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo: 'black',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
            strokeWidth: 2, // optional, default 3
          }}
          paddingLeft="15"
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <LineChart
          data={{
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 50} // from react-native
          height={220}
          yAxisLabel={'Rp'}
          chartConfig={{
            backgroundColor: COLORS.primary,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.primary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <PieChart
          data={[
            {
              name: 'Jawa Barat',
              population: 48.0,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: 'white',
              legendFontSize: 11,
            },
            {
              name: 'Jawa Timur',
              population: 39.2,
              color: 'red',
              legendFontColor: 'white',
              legendFontSize: 11,
            },
            {
              name: 'Jawa Tengah',
              population: 34.2,
              color: 'yellow',
              legendFontColor: 'white',
              legendFontSize: 11,
            },
            {
              name: 'Sumatera Utara',
              population: 14.2,
              color: 'orange',
              legendFontColor: 'white',
              legendFontSize: 11,
            },
            {
              name: 'Banten',
              population: 12.4,
              color: 'green',
              legendFontColor: 'white',
              legendFontSize: 11,
            },
          ]}
          width={Dimensions.get('window').width - 50} // from react-native
          height={220}
          chartConfig={{
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              borderRadius: 16,
            },
          }}
          backgroundColor="blue"
          accessor="population"
          paddingLeft="15"
          absolute
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PresentaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
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
