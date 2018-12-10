import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, ScrollView, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

export default class Organization extends Component {
  render() {
    const { navigation } = this.props;
    const org_name = navigation.getParam('org_name', 'NO-NAME');
    return (     
      <ScrollView style={styles.container}>
          <Text style={styles.subTitles}>Organization</Text>
          <Text style={styles.activityInfo}>
          {(org_name)}
          </Text>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  activityInfo: {
    textAlign: 'left',
    fontSize: 15,
    paddingBottom: 10,
  },
  subTitles: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15
  },
  container: {
    margin: 0,
    paddingHorizontal: 15
  },
  buttonContainer: {
    backgroundColor: '#F35A3A',
    paddingVertical: 15
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  mainImage: {
  width: 400,
  height: 150,
  resizeMode: 'contain'
  },
  scene: {
    flex: 1,
  }
});