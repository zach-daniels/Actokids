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
                      // Initially visible month. Default = Date()
                      current={'2018-11-01'}
                      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                      minDate={'2012-05-10'}
                      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                      maxDate={'2020-05-30'}
                      // Handler which gets executed on day press. Default = undefined
                      onDayPress={(day) => {console.log('selected day', day)}}
                      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                      monthFormat={'yyyy MM'}
                      // Handler which gets executed when visible month changes in calendar. Default = undefined
                      onMonthChange={(month) => {console.log('month changed', month)}}
                      // Hide month navigation arrows. Default = false
                      hideArrows={true}
                      // Replace default arrows with custom ones (direction can be 'left' or 'right')
                      renderArrow={(direction) => (<Arrow />)}
                      // Do not show days of other months in month page. Default = false
                      hideExtraDays={true}
                      // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                      // day from another month that is visible in calendar page. Default = false
                      disableMonthChange={true}
                      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                      firstDay={1}
                    />


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

