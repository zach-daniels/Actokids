import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';

export class Activity extends Component {

  state = {
    data: []
  };
  
  componentWillMount(){
    this.fetchData();
  }
  
  /// get image from json
  fetchData = async () => {
    const response = await fetch('http://demodude1.azurewebsites.net/');
    const json = await response.json();
    this.setState({ data: json });
  };

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
      <View style={styles.container}>
    <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        renderItem={ ({item}) =>
        <View style={{marginBotton: 30}}>

    <Text style={styles.titleText}>
           picture_url: {JSON.stringify(picture_url)}
       </Text>
              <Text style={styles.body}>
              act_name: {JSON.stringify(activity_name)}
              activity_date: {JSON.stringify(activity_date)}
              location_name: {JSON.stringify(location_name)}
              location_address: {JSON.stringify(location_address)}
              </Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>REGISTER:</Text>
              </TouchableOpacity>
              <Text style={styles.subTitles}>DESCRIPTION:</Text>
              <Text style={styles.activityInfo}>{JSON.stringify(activity_description)}</Text>
              <Text style={styles.subTitles}>ACCESSIBILITY:</Text>
              <Text style={styles.subTitles}>DISABILITY:</Text>
              <Text style={styles.subTitles}>AGE RANGE:</Text>
              <Text style={styles.activityInfo}>{JSON.stringify(lowest_age)} - {JSON.stringify(highest_age)}</Text>
              <Text style={styles.subTitles}>CHILD : STAFF RATIO</Text>
              <Text style={styles.subTitles}>COST:</Text>
              <Text style={styles.activityInfo}>{JSON.stringify(cost)}</Text>
              <Text style={styles.subTitles}>CONTACT:</Text>
              <Text style={styles.activityInfo}>{JSON.stringify(contact_name)}</Text>
              <Text style={styles.subTitles}>MAP:</Text>

        </View>
    }/>

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