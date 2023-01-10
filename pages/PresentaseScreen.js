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
        width={Dimensions.get('window').width - 20} // from react-native
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
    </View>
  );
};

export default PresentaseScreen;

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
