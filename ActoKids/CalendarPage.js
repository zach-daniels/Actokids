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

import {Calendar, LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';



export default class CalendarPage extends Component {
  //Added Tab Bottom Navigation 

  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Calendar',
    tabBarIcon: ({tintColor })=>(
        <Image
            source = {require('./images/calendar.png')}
            style = {[{width: 26}, {height: 26}, {shadowColor: 'white'},{tintColor: tintColor}]}
            />
    )
    }



    render() {
    const { navigation } = this.props;
    const activity_name = navigation.getParam('activity_name', 'NO-NAME');
    const activity_date = navigation.getParam('activity_date', 'NO-NAME');
    const cost = navigation.getParam('cost', 'NO-NAME');
    const org_name = navigation.getParam('org_name', 'NO-NAME');
    const location_name = navigation.getParam('location_name', 'NO-NAME');
    const location_address = navigation.getParam('location_address', 'NO-NAME');
    const contact_name = navigation.getParam('contact_name', 'NO-NAME');
    const picture_url = navigation.getParam('picture_url', 'NO-NAME');
    const activity_description = navigation.getParam('activity_description', 'NO-NAME');
    const lowest_age = navigation.getParam('lowest_age', 'NO-NAME');
    const highest_age = navigation.getParam('highest_age', 'NO-NAME');

    return (   
        <Text style={styles.titleText}>
            act_name: {JSON.stringify(activity_name)}
            activity_date: {JSON.stringify(activity_date)}
            cost: {JSON.stringify(cost)}
            org_name: {JSON.stringify(org_name)}
            location_name: {JSON.stringify(location_name)}
            location_address: {JSON.stringify(location_address)}
            contact_name: {JSON.stringify(contact_name)}
            picture_url: {JSON.stringify(picture_url)}
            activity_description: {JSON.stringify(activity_description)}
            lowest_age: {JSON.stringify(lowest_age)}
            highest_age: {JSON.stringify(highest_age)}
        </Text>

       
    );
  }


  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightgray',
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },

  toolbar:{
    backgroundColor: '#FF4500',
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row'
   },
   toolbarTitle:{
     color: '#fff',
     width: 150,
     fontSize: 25,
     textAlign: 'center',
     
   },
   toolbarFilter:{
     width: 50,
     position: 'absolute',
     bottom: 10,
     right: 50,
   },
   toolbarLocation: {
      width: 50,
      position: 'absolute',
      bottom: 10,
      right: 0,
      
   },
  });

