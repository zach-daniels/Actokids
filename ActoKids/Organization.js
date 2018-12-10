import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';



export default class Organization extends Component {

    constructor(props) {
        super(props)
        this.state = {
            params: props.navigation.params
        }
    }

    state = {
        activity_name: " ",
        activity_date: " ",
        cost: " ",
        org_name: " ",
        location_name: " ",
        location_address: " ",
        contact_name: " ",
        picture_url: " ",
        activity_description: " ",
        lowest_age: " ",
        highest_age: " ",
    };



    /*static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={() => { navigation.navigate('Activities', {}); }}>

                    <Text style={styles.buttonText}>See Activity</Text>
                </TouchableOpacity>
            )
        };
    };*/


    render() {
    //alert(this.state.picture_url);
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image style={{ width: 390, height: 200 }} source={{ uri: this.state.picture_url}} />
        <Text style={styles.welcome}>ORGANIZATION Information</Text>
      </ScrollView>
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
