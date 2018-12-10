import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
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
        <ScrollView>
          <Image style={{ width: 390, height: 200 }} source={{ uri: this.state.picture_url}} />
            <View style={styles.row}>
              <View style={styles.textWrap}>
                <Text style={styles.activityInfo}>{this.state.activity_name}</Text>
              </View>
              <View style={styles.textWrap}>
                <Text style={styles.cost2}>${this.state.cost}</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.imageWrapper}>
                <Image
                  style={[{ width: 28 }, { height: 28 }]}
                  source={require('./images/baseline_access_time_black_48dp.png')}
                  />
                </View>
              <View>
                <Text style={{fontSize: 16}}>FRI, May 13</Text>
                <Text style={{fontSize: 16}}>4:00PM - 5:30PM</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={styles.imageWrapper}>
                <Image
                  style={[{ width: 28 }, { height: 28 }]}
                  source={require('./images/baseline_location_on_black_48dp.png')}
                  />
                </View>
              <View>
                <Text style={{fontSize: 16}}>{this.state.location_address}</Text>
                <Text style={{fontSize: 16}}>{this.state.location_name}</Text>
              </View>
            </View>
            <View style={styles.row4}>
              <View style={styles.imageWrapper}>
                <Image
                  style={[{ width: 28 }, { height: 28 }]}
                  source={require('./images/baseline_phone_black_48dp.png')}
                  />
                </View>
              <View>
                <Text style={{fontSize: 16, marginTop: 5}}>(206) 510 - 7185</Text>
              </View>
            </View>
            <Text style={styles.subTitles}>DESCRIPTION</Text>
            <Text style={styles.bodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={styles.subTitles}>ACCESSBILITY</Text>
            <Text style={styles.bodyText}>Wheelchair accessible, wheelchair bathrooms, adaptive equipment</Text>
            <Text style={styles.subTitles}>DISABILITY</Text>
            <Text style={styles.bodyText}>Cognitive, Mobility, Other</Text>
            <Text style={styles.subTitles}>AGE RANGE</Text>
            <Text style={styles.bodyText}>{this.state.lowest_age} - {this.state.highest_age}</Text>
            <Text style={styles.subTitles}>CHILD : STAFF RATIO</Text>
            <Text style={styles.bodyText}>3</Text>
            <Text style={styles.subTitles}>COST</Text>
            <Text style={styles.bodyText}>${this.state.cost}</Text>
            <Text style={styles.subTitles}>EVENT CONTACT</Text>
            <Text style={styles.bodyText}>{this.state.contact_name}</Text>
            <Text style={styles.bodyText}>(206) 510 - 7185</Text>
            <Text style={styles.bodyText}>info@nwadaptivecenter.org</Text>
            <Text style={styles.bodyText}>nwadaptivecenter.org</Text>
            <View style={{borderColor: 'lightgray', borderBottomWidth: 2, marginTop: 30, marginBottom: 20}}></View>
            <Text style={styles.activityInfo}>{this.state.org_name}</Text>
            <Text style={styles.subTitles}>DESCRIPTION</Text>
            <Text style={styles.bodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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
    fontSize: 24,
  },
  row: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
  },
  row2: {
    marginTop: 10,
    flex: 2,
    flexDirection: "row",
  },
  row3: {
    marginTop: 10,
    flex: 3,
    flexDirection: "row",
  },
  row4: {
    marginTop: 10,
    flex: 4,
    flexDirection: "row"
  },
  textWrap: {
    flex: 1,
  },
  cost2: {
    fontSize: 20,
    left: 140
  },
  subTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 3
  },
  bodyText: {
    fontSize: 16
  },
  container: {
    padding: 10,
  },
  imageWrapper: {
    marginRight: 10
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
