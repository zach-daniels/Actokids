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

constructor(props) {
  super(props);
  this.state = {};
  this.onDayPress = this.onDayPress.bind(this);
}




  render() {
    const { navigate } = this.props.navigation;

    return (   
        <View style={styles.container}>    
            {/**Top Toolbar: Filter and Location */}
            <View style={styles.toolbar}>
                <Text style={styles.toolbarTitle}>Acto Kids</Text>
                      {/*Filter: icon */}
                      <TouchableOpacity 
                          style={styles.toolbarFilter}
                            //onPress={()=>{this.FilterPage}}
                              onPress= {() => navigate('FilterPage')}>
                            <Image
                              source={require('./images/filter.png')}
                              />
                      </TouchableOpacity>

                      {/**Location: icon*/}
                      <TouchableOpacity 
                          style={styles.toolbarLocation}
                          onPress = {() => {console.log('location icon pressed')}}>
                        
                            <Image
                              source={require('./images/location.png')}
                              />
                        </TouchableOpacity>
            </View>

            <View>

                <Calendar 
                      onDayPress = {this.onDayPress}
                      //style={styles.calendar}
                       hideExtraDays
                       markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
                      />                      

            </View>
        </View>
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

