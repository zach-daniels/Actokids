/**
 * Displays the available filters and allows the user to submit filters to filter 
 * events displayed
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  View,
  DatePickerAndroid
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'

export default class CalendarPage extends Component {
  //Added Tab Bottom Navigation 
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Calendar',
    tabBarIcon: ({tintColor })=>(
        <Image
            source = {require('./images/calendar.png')}
            // stylee = {[styles.icon, {tintColor: tintColor}]}
            style = {[{width: 26}, {height: 26}, {shadowColor: 'white'},{tintColor: tintColor}]}
            />
    )
}


  render() {
    return (   
        <View style={styles.container}>
            <View style={styles.outerApp}>
                <Text style={styles.titleText}>
                Welcome to Calendar...
                </Text>
            </View> 

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'lightgray',
    },

     outerApp: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#A9A9A9',
  
    },
    titleText:{
      fontFamily: 'serif',
      fontSize: 32, 
      color: 'black',
    },
  });

