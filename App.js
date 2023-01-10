import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  BackHandler,
  Alert,
  Button,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import SplashScreen from './pages/SplashScreen';
import IntroScreen from './pages/IntroScreen';
import TrackScreen from './pages/TrackScreen';
import LoginScreen from './pages/LoginScreen';
import PresentaseScreen from './pages/PresentaseScreen';
import AlarmScreen from './pages/AlarmSreen';
import BuatalarmScreen from './pages/BuatalarmScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './pages/RegisterScreen';

const COLORS = {primary: '#1E319D', white: '#FFFFFF'};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            color: COLORS.primary,
          },
          headerTitleAlign: 'center',
          headerTintColor: COLORS.primary,
        }}>
        <Stack.Screen
          name="Tab1"
          component={Tab1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuatalarmScreen"
          component={BuatalarmScreen}
          options={{
            title: 'Tambah Alarm',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          color: COLORS.primary,
        },
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1E319D',
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 20,
          height: 65,
          // ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="AlarmScreen"
        component={AlarmScreen}
        options={{
          title: 'Alarm',
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.buttonicon}>
                <Image
                  source={
                    focused
                      ? require('./assets/img/icon/alarm.png')
                      : require('./assets/img/icon/alarm.png')
                  }
                  resizeMode="contain"
                  style={{
                    alignItems: 'center',
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FFFFFF' : '#B2B6C1',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FFFFFF' : '#B2B6C1',
                    fontSize: 13,
                    alignItems: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Alarm
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TrackScreen"
        component={TrackScreen}
        options={{
          title: 'Track Record',
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.buttonicon}>
                <Image
                  source={require('./assets/img/icon/track_record.png')}
                  resizeMode="contain"
                  style={{
                    alignItems: 'center',
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FFFFFF' : '#B2B6C1',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FFFFFF' : '#B2B6C1',
                    fontSize: 13,
                    alignItems: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Track record
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="PresentaseScreen"
        component={PresentaseScreen}
        options={{
          title: 'Presentase',
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.buttonicon}>
                <Image
                  source={
                    focused
                      ? require('./assets/img/icon/presentase.png')
                      : require('./assets/img/icon/presentase.png')
                  }
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FFFFFF' : '#B2B6C1',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FFFFFF' : '#B2B6C1',
                    fontSize: 13,
                    alignItems: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Presentase
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 50,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonicon: {
    alignItems: 'center',
  },
});
