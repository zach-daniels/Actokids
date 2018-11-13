import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';


export class Activity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.activityInfo}>Activity Info</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.subTitles}>DESCRIPTION</Text>
        <Text style={styles.subTitles}>ACCESSBILITY</Text>
        <Text style={styles.subTitles}>DISABILITY</Text>
        <Text style={styles.subTitles}>AGE RANGE</Text>
        <Text style={styles.subTitles}>CHILD : STAFF RATIO</Text>
        <Text style={styles.subTitles}>COST</Text>
        <Text style={styles.subTitles}>CONTACT</Text>
        <Text style={styles.subTitles}>MAP</Text>
      </View>
    );
  }
}

export class Organization extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ORGANIZATION Information</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Activity: Activity,
  Organization: Organization},
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      style:{
        backgroundColor: '#F35A3A'
      },
      indicatorStyle: {
        height: 1,
        backgroundColor: 'white'
        }
      }
    },
);

const styles = StyleSheet.create({
  activityInfo: {
    textAlign: 'left',
    fontSize: 20,
    paddingBottom: 10,
  },
  subTitles: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15
  },
  container: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: '#F35A3A',
    paddingVertical: 15
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});