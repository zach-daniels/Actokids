/**
 * This page displays all details about an event
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ListView,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native'; 
import {Navigator} from 'react-native-deprecated-custom-components';



export default class DetailsPage extends Component {

  //Added Tab Bottom Navigation 
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Favorite',
    tabBarIcon: ({tintColor })=>(
        <Image
            source = {require('./images/favorite.png')}
            // stylee = {[styles.icon, {tintColor: tintColor}]}
            style = {[{width: 26}, {height: 26}, {shadowColor: 'white'},{tintColor: tintColor}]}
            />
    )
}


    constructor(props) {
      var dat = props.data == undefined? {'activity_name': 'none'} : props.data; 
      super(props);
      this.state = {id: 1, text: '', dat: dat, months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']};
    }


  _navigate (){
      this.props.navigator.push({title: 'Details Page', index: 4})
  }
  //Brings user back to the search page
  _onBack () { 
    this.props.navigator.pop();
  }
  //displays boolean value as text "yes or no" 
  _bool_to_text(val){
    if(val==true) { 
      return 'Yes';
    } else if (val==false) { 
      return 'No';
    } else { 
      return 'Unknown';
    }
  }

//formats the time of the event
  _get_time(val) { 
    var time = (val+"").replace("(", "").replace(")","").replace("[","").replace("]","");
    var arr = time.split(",");
    arr.concat(["12"])
    var start = (""+arr[0]).split(".");
    var end = (""+arr[1]).split(".");
    var startMin = start[1]*60 *100 + ""; 
    var endMin = end[1]*60 *100 +"";
    if(startMin.length < 2){ 
      startMin =startMin+"0";
    } 
    if(endMin.length < 2){ 
      endMin =endMin+"0";
    } 
    return start[0] + ":" + startMin.substr(0,2) + "-" + end[0]+":"+endMin.substr(0,2); 
  }

//displays the page
  render() {
    return (     
    <View style={styles.outerApp}>
       <View style={{ justifyContent: 'flex-start', flexDirection: 'row',}}>
         <TouchableOpacity 
           onPress={() => this._onBack()}
           title="Back"
           color="darkgray"
           accessibilityLabel="Back"
        />
        </View>
      <View style={styles.headerView} > 
        <Text style={styles.titleText}>
          {this.state.dat.activity_name}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={{fontSize: 22,fontFamily: 'serif',textAlign: 'center', color: 'black'}}>
          {this.state.dat.descriptions}
        </Text> 
        <Text style={styles.headerText}>
          Date: {this.state.months[new Date(this.state.dat.dates).getMonth()]} {new Date(this.state.dat.dates).getDate()} , {new Date(this.state.dat.dates).getFullYear()}
        </Text>
        <Text style={styles.headerText}>
          Time: {this._get_time(this.state.dat.time_of_day)}
        </Text>         
        <Text style={styles.headerText}>
          Cost:  {this.state.dat.cost}
        </Text>        
        <Text style={styles.headerText}>
          Location: {this.state.dat.street_name} {this.state.dat.city} {this.state.dat.state} {this.state.dat.zip_code} 
        </Text> 
        <Text style={styles.headerText}>
          Wheelchair Accessible: {this._bool_to_text(this.state.dat.wheelchair_accessible)}
        </Text> 
        <Text style={styles.headerText}>
          Wheelchair Accessible Restroom: {'unknown'}
        </Text>
        <Text style={styles.headerText}>
          Activity Type: {this.state.dat.activity_type}
        </Text> 
        <Text style={styles.headerText}>
          Disability Type: {this.state.dat.disability_type}
        </Text> 
        <Text style={styles.headerText}>
          Age range:  {(this.state.dat.age_range+"").replace("(", "").replace(")","").replace("[","").replace("]","").replace("{", "").replace("}","").replace(",","-")}
        </Text> 
        <Text style={styles.headerText}>
          Parent participation required: {this._bool_to_text(this.state.dat.parent_participation_required)}
        </Text> 
        <Text style={styles.headerText}>
          Assistant Provided: {this._bool_to_text(this.state.dat.assistant_provided)}
        </Text>
        <Text style={styles.headerText}>
          Phone number to call for accessibility questions: {this.state.dat.phone_number}
        </Text>
        <Text style={styles.itemText}>
          Equipment provided: {this.state.dat.equipment_provided}
        </Text> 
        <Text style={styles.itemText}>
          Sibling participation allowed: {this._bool_to_text(this.state.dat.sibling_participation)}
        </Text> 
        <Text style={styles.itemText}>
          Kids to staff ratio: {this.state.dat.kids_to_staff_ratio}
        </Text> 
        <Text style={styles.itemText}>
          ASL Interpreter available:  {this._bool_to_text(this.state.dat.asl_interpreter_available)}
        </Text> 
        <Text style={styles.itemText}>
          Closed circuit hearing loop: {this._bool_to_text(this.state.dat.closed_circuit_hearing_loop_available)}
        </Text>
        <Text style={styles.itemText}>
          Additional charge for personal care attendant: {this._bool_to_text(this.state.dat.additional_charge)}
        </Text>
        <Text style={styles.itemText}>
          Can accommodate service animals: {this._bool_to_text(this.state.dat.accommodate_service_animals)}
        </Text> 
        <Text style={styles.itemText}>
          Childcare onsite:  {this._bool_to_text(this.state.dat.onsite_childcare)}
        </Text>
      </ScrollView>
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
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'green',
  },
  titleText:{
    flex: 2,
    fontSize: 32, 
    color:'white',
    fontFamily: 'serif',
    textAlign: 'center'

  },
  headerText: { 
    fontSize: 18,
    color: 'black',
    fontFamily: 'serif',
  },
  itemText: { 
    color:'black',
    fontSize:16,
    fontFamily: 'serif',
  },
  backButton: {
    flex:1,
    width:75,
    fontFamily: 'serif',
    fontSize: 20,
    color:'white'
  },
  inputText: { 
    height: 40, 
    width: 200, 
    fontSize: 18,
    fontFamily: 'serif',
  }, 
  headerView: {         
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: "center",
}, 

});

