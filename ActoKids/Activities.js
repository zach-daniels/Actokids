import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


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

    fetchDisability = async () => {
        const { navigation } = this.props;

        const api_call = 'http://actokids2.azurewebsites.net/?act_id=' + this.state.act_id;
        const response = await fetch(api_call);
        const json = await response.json();
        this.setState({ data: json });
    };

    state = {
        data: [],
        act_id: " ",
        activity_name: " ",
        activity_date: " ",
        activity_description:" ",
        wheelchairaccess: " ",
        wheelchairrestroom: " ",
        childratio: " ",
        organization_desc: " ",
        cost: " ",
        org_name: " ",
        location_name: " ",
        childratio: " ",
        location_address: " ",
        contact_name: " ",
        contact_phone: " ",
        contact_email: " ",
        picture_url: " ",
        activity_description: " ",
        lowest_age: " ",
        highest_age: " ",
        disabilities_served: " ",
    };

    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load)
    }

    load = () => {
        //alert('True');
        this.fetchDisability();
    }



    componentWillMount() {
        const { navigation } = this.props;
        this.state.act_id = navigation.getParam('act_id', 'NO-NAME');
        this.state.activity_name = navigation.getParam('activity_name', 'NO-NAME');
        this.state.activity_date = navigation.getParam('activity_date', 'NO-NAME');
        this.state.activity_description = navigation.getParam('activity_description', 'NO-NAME');
<<<<<<< HEAD
        this.state.wheelchairaccess = navigation.getParam('wheelchairaccess', 'NO-NAME');
        if (this.state.wheelchairaccess == 1) {
          this.state.wheelchairaccess = 'Wheelchair accessible';
        } else {
          this.state.wheelchairaccess = '';
        }
        this.state.wheelchairrestroom = navigation.getParam('wheelchairrestroom', 'NO-NAME');
        if (this.state.wheelchairrestroom == 1) {
          this.state.wheelchairrestroom = 'Wheelchair restrooms';
        } else {
          this.state.wheelchairrestroom = '';
        }
        this.state.childratio = navigation.getParam('childratio', 'NO-NAME');
        this.state.organization_desc = navigation.getParam('organization_desc', 'NO-NAME');
=======
        this.state.cost = navigation.getParam('cost', 'NO-NAME');
        this.state.childratio = navigation.getParam('childratio', 'NO-NAME');
        this.state.org_name = navigation.getParam('org_name', 'NO-NAME');
        this.state.org_desc = navigation.getParam('organization_desc', 'NO-NAME');
>>>>>>> ffa744e562daa76d4484a2eadfd8808e0721cef2
        this.state.location_name = navigation.getParam('location_name', 'NO-NAME');
        this.state.location_address = navigation.getParam('location_address', 'NO-NAME');
        this.state.contact_name = navigation.getParam('contact_name', 'NO-NAME');
        this.state.contact_phone = navigation.getParam('contact_phone', 'NO-NAME');
        this.state.contact_email = navigation.getParam('contact_email', 'NO-NAME');
        this.state.cost = navigation.getParam('cost', 'NO-NAME');
        this.state.org_name = navigation.getParam('org_name', 'NO-NAME');
        this.state.org_desc = navigation.getParam('organization_desc', 'NO-NAME');
        this.state.picture_url = navigation.getParam('picture_url', 'NO-NAME');
        this.state.activity_description = navigation.getParam('activity_description', 'NO-NAME');
        this.state.lowest_age = navigation.getParam('lowest_age', 'NO-NAME');
        this.state.highest_age = navigation.getParam('highest_age', 'NO-NAME');
       // alert(this.state.picture_url);
    }


    render() {
        let disabilities_served;
        //alert(this.state.picture_url);
        if (this.state.data != null) {
            for (let temp of this.state.data) {
                disabilities_served = disabilities_served + " " + temp['access_name'];
                console.log(temp['access_name']);
            }
        }
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
            <Text style={styles.bodyText}>{disabilities_served}</Text>
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
