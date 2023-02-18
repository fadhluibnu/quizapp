import * as React from 'react';
import HomeScreen from './components/screen/HomeScreen';
import SearchScreen from './components/screen/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Image, Button } from 'react-native';
import HistoryScreen from './components/screen/HistoryScreen';
import MateriScreen from './components/screen/MateriScreen';
import PenjumlahanScreen from './components/screen/PenjumlahanScreen';

const Tab = createBottomTabNavigator();

function MyBottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 24,
        paddingLeft: 60,
        paddingRight: 60,
        height: 72
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            backgroundColor: focused ? '#66AFFE' : 'transparent',
            padding: 12,
            borderRadius: 10,
            borderBottomWidth: 4,
            borderColor: focused ? '#4D83BF' : 'transparent'
          }}>
            <Image source={
              focused ? require('./assets/image/home-icon-focused.png') : require('./assets/image/home-icon.png')
            } style={{
              width: 27.5,
              height: 27.95,
              resizeMode: 'contain'
            }} />
          </View>
        )
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            backgroundColor: focused ? '#66AFFE' : 'transparent',
            padding: 12,
            borderRadius: 10,
            borderBottomWidth: 4,
            borderColor: focused ? '#4D83BF' : 'transparent',
          }}>
            <Image source={
              focused ? require('./assets/image/search-icon-focused.png') : require('./assets/image/search-icon.png')
            } style={{
              width: 27.5,
              height: 27.95,
              resizeMode: 'contain'
            }} />
          </View>
        )
      }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            backgroundColor: focused ? '#66AFFE' : 'transparent',
            padding: 12,
            borderRadius: 10,
            borderBottomWidth: 4,
            borderColor: focused ? '#4D83BF' : 'transparent',
          }}>
            <Image source={
              focused ? require('./assets/image/clock-icon-focused.png') : require('./assets/image/clock-icon.png')
            } style={{
              width: 28.33,
              height: 28.33,
              resizeMode: 'contain'
            }} />
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="MyBottomTabNavigation" component={MyBottomTabNavigation} />
        <Stack.Screen name="Penjumlahan" component={PenjumlahanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}