import * as React from 'react';
import {Text, View, Image, StyleSheet, BackHandler, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import SplashScreen from './pages/SplashScreen';
import IntroScreen from './pages/IntroScreen';
import TrackScreen from './pages/TrackScreen';
import AlarmScreen from './pages/AlarmSreen';
import LoginScreen from './pages/LoginScreen';
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function Alarm() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function Akun() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('', 'Apakah Anda yakin ingin keluar dari aplikasi?', [
        {
          text: 'Batal',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Keluar', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#25376A',
            position: 'absolute',
            bottom: 15,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 20,
            height: 65,
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{tabBarStyle: {display: 'none'}, tabBarButton: () => null}}
        />
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: 'True',
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{tabBarStyle: {display: 'none'}, tabBarButton: () => null}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require('./assets/img/icon/home.png')
                        : require('./assets/img/icon/home.png')
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
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Track Record"
          component={TrackScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require('./assets/img/icon/track_record.png')
                        : require('./assets/img/icon/track_record.png')
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
                    }}>
                    Track record
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Setting Alarm"
          component={AlarmScreen}
          options={{
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
                    }}>
                    Alarm
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Alarm"
          component={Alarm}
          options={{
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
                    }}>
                    Presentase
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Akun"
          component={Akun}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require('./assets/img/icon/akun.png')
                        : require('./assets/img/icon/akun.png')
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
                    }}>
                    Akun
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
