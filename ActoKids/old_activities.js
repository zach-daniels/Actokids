import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, ScrollView, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

class Activity extends Component {
  render() {
    const { navigation } = this.props;
    const activity_name = navigation.getParam('activity_name', 'NO-NAME');
    const activity_date = navigation.getParam('activity_date', 'NO-NAME');
    const cost = navigation.getParam('cost', 'NO-NAME');
    const location_name = navigation.getParam('location_name', 'NO-NAME');
    const location_address = navigation.getParam('location_address', 'NO-NAME');
    const contact_name = navigation.getParam('contact_name', 'NO-NAME');
    const picture_url = navigation.getParam('picture_url', 'NO-NAME');
    const activity_description = navigation.getParam('activity_description', 'NO-NAME');
    const lowest_age = navigation.getParam('lowest_age', 'NO-NAME');
    const highest_age = navigation.getParam('highest_age', 'NO-NAME');

    return (     
      <ScrollView style={styles.container}>
        <Text>
          <Image style={styles.mainImage}
          source={{uri: picture_url}}
          />
       </Text>
       <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between', paddingVertical:15}}>
          <Text style={{fontSize: 20, textAlign:'left', color:'black'}}>
            {(activity_name)} 
          </Text>
          <Text style={{fontSize: 15, textAlign:"right", color:'black'}}>
            {(cost)} 
          </Text>
      </View>
        <View style={{flex: 1, flexDirection:'row', alignItems:'center', paddingBottom:15}}>
          <Image
           source={require('./images/clock.png')}
          />
          <Text style={{ fontSize: 15, textAlign:"left", paddingLeft:5, color:'black'}}>
            {(activity_date)}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection:'row', alignItems:'center', paddingBottom:15}}>
            <Image
            source={require('./images/location_clean.png')}
            />
          <View style={{flex: 1, textAlign:'left', paddingLeft:5}}>
            <Text style={{ fontSize: 15, color: 'black'}}>
                {(location_address)}
            </Text>
            <Text style={{ fontSize: 15, color: 'black'}}>
                {(location_name)}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection:'row', alignItems:'center', paddingBottom:15}}>
          <Image
           source={require('./images/call.png')}
          />
          <Text style={{ fontSize: 15, color: 'black', paddingLeft:5}}>
          (206) 475 - 7364 
          </Text>
        </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        <View style={{paddingVertical:5}} >
          <View style={{borderBottomColor: 'gray',borderBottomWidth: 1, paddingVertical:10}}/>
          <View style={{flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:20}}>
              <View style={{flex: 1, flexDirection:'row', alignItems:'center', paddingTop:12}}>
                <TouchableOpacity style={{flex: 1, flexDirection:'row', paddingTop:12}}>
                  <Image
                  source={require('./images/favorite.png')}
                  />
                  <Text style={{ fontSize: 15, color: 'black', textAlign:"center", paddingLeft:5, paddingTop:5}}>
                    Add to Favorite
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection:'row', alignItems:'center', paddingTop:12, paddingLeft:15}}>
                <TouchableOpacity style={{flex: 1, flexDirection:'row', paddingTop:12}}>
                  <Image
                  source={require('./images/share.png')}
                  />
                  <Text style={{ fontSize: 15, color: 'black', textAlign:"center", paddingLeft:5}}>
                    Share
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{borderBottomColor: 'gray',borderBottomWidth: 1, paddingVertical:10}}/>
        </View>
          <Text style={styles.subTitles}>DESCRIPTION</Text>
          <Text style={styles.activityInfo}>
            {(activity_description)}
          </Text>
          <Text style={styles.subTitles}>ACCESSIBILITY</Text>
          <Text style={styles.subTitles}>DISABILITY</Text>
          <Text style={styles.subTitles}>AGE RANGE</Text>
          <Text style={styles.activityInfo}>
            {(lowest_age)} - {(highest_age)}
          </Text>
          <Text style={styles.subTitles}>CHILD : STAFF RATIO</Text>
          <Text style={styles.subTitles}>COST</Text>
          <Text style={styles.activityInfo}>
            {(cost)}
          </Text>
          <Text style={styles.subTitles}>CONTACT</Text>
          <Text style={styles.activityInfo}>
            {(contact_name)}
          </Text>
          <Text style={styles.subTitles}>MAP</Text>
        </ScrollView>
    );
  }
}

class Organization extends Component {
  render() {
    const { navigation } = this.props;
    const org_name = navigation.getParam('org_name', 'NO-NAME');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{(org_name)}</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Activity: Activity,
  Organization: Organization
},
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