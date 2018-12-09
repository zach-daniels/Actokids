import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';



export default class Organization extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={() => { navigation.navigate('Activities', {}); }}>

                    <Text style={styles.buttonText}>See Activity</Text>
                </TouchableOpacity>
            )
        };
    };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ORGANIZATION Information</Text>
      </View>
    );
  }
}

/*export default createMaterialTopTabNavigator({
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
);*/

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