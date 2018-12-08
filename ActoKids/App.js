
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */

import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  ListView,
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

import {createAppContainer, 
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import EnterEvent from './EnterEvent';
import Activities from './Activities';
import FilterPage from './FilterPage';

import SearchPage from './SearchPage';


const MainStack = createStackNavigator(
  {
    Home: { screen: HomePage},
    Filter:{screen:  FilterPage},
  });

export default createAppContainer(createBottomTabNavigator({

        MainStack: {screen: MainStack,
              navigationOptions:{
                tabBarLabel: 'Activities',
                tabBarIcon: ({ tintColor }) => (
                  <Image
                      source={require('./images/activity.png')}
                      style={[{ width: 26 }, { height: 26 }, { tintColor: tintColor }]}
                  />
                )
              }
          },

        CalendarPage: {screen: CalendarPage},
       // DetailsPage: {screen: DetailsPage},
        Activities: { screen: Activities},
    },
  {
  // Buttom Tab Texts navigation
    tabBarOptions: {
    activeTintColor: '#F8F8FF', 

    labelStyle: {
      fontSize: 16,
      fontWeight: '600',
    },
    style: {
      backgroundColor: '#FF4500',
      borderTopColor: 'grey',
    },

  } 

}
));
