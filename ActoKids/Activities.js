import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';


export default class Activity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            params: props.navigation.params
        }
    }

   /* static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={() => { navigation.navigate('Organization', {}); }}>

                    <Text style={styles.buttonText}>See Organization</Text>
                </TouchableOpacity>
            )
        };
    };*/

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

    componentWillMount() {
        const { navigation } = this.props;
        this.state.activity_name = navigation.getParam('activity_name', 'NO-NAME');
        this.state.activity_date = navigation.getParam('activity_date', 'NO-NAME');
        this.state.cost = navigation.getParam('cost', 'NO-NAME');
        this.state.org_name = navigation.getParam('org_name', 'NO-NAME');
        this.state.location_name = navigation.getParam('location_name', 'NO-NAME');
        this.state.location_address = navigation.getParam('location_address', 'NO-NAME');
        this.state.contact_name = navigation.getParam('contact_name', 'NO-NAME');
        this.state.picture_url = navigation.getParam('picture_url', 'NO-NAME');
        this.state.activity_description = navigation.getParam('activity_description', 'NO-NAME');
        this.state.lowest_age = navigation.getParam('lowest_age', 'NO-NAME');
        this.state.highest_age = navigation.getParam('highest_age', 'NO-NAME');
       // alert(this.state.picture_url);
    }


    render() {
        //alert(this.state.picture_url);
    return (
        <View style={styles.container}>
            <Image style={{ width: 390, height: 100 }} source={{ uri: this.state.picture_url}} />
            <Text style={styles.subTitles}>{this.state.activity_name}</Text>
        <Text style={styles.subTitles}>ACCESSBILITY</Text>
        <Text style={styles.subTitles}>DISABILITY</Text>
            <Text style={styles.subTitles}>{this.state.lowest_age} - {this.state.highest_age}</Text>
        <Text style={styles.subTitles}>CHILD : STAFF RATIO</Text>
            <Text style={styles.subTitles}>$ {this.state.cost}</Text>
            <Text style={styles.subTitles}>{this.state.contact_name}</Text>
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