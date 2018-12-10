/**Home page for our app */
import React, { Component } from 'react';
import { Card } from 'react-native-elements';

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

import moment from 'moment';

export default class HomePage extends Component {
    //Add Top Navigation
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    style={{ marginRight: 30 }}

                    onPress={() => {
                        navigation.navigate('FilterPage', {});
                    }}>
                    <Image
                    source={require('./images/filter.png')}/>
                </TouchableOpacity>
            )
        };
    };

    state = {
        data: [],
    };

    //ComponentDidMount checks to see if the screen mounted, and if so
    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load)
    }

    load = () => {
        //alert('True');
        this.fetchData();
    }

    /// get image from json
    fetchData = async () => {
        const { navigation } = this.props;
        const api_call = navigation.getParam('url', 'http://actokids2.azurewebsites.net/');
        const response = await fetch(api_call);
        const json = await response.json();
        this.setState({ data: json });
    };


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) =>
                        <View style={{ marginBotton: 30 }}>
                          <TouchableHighlight
                              onPress={() => {
                                    this.props.navigation.navigate('Activities', {
                                    act_id: `${item.act_id}`,
                                    activity_name: `${item.act_name}`,
                                    activity_date: `${item.act_date}`,
                                    cost: `${item.cost}`,
                                    org_name: `${item.org_name}`,
                                    location_name: `${item.loc_name}`,
                                    location_address: `${item.loc_address}`,
                                    contact_name: `${item.cont_name}`,
                                    contact_phone: `${item.cont_phone}`,
                                    contact_email: `${item.cont_email}`,
                                    picture_url: `${item.pic_url}`,
                                    activity_description: `${item.act_desc}`,
                                    lowest_age: `${item.lowest_age}`,
                                    highest_age: `${item.highest_age}`,
                                    otherParam: 'anything you want here',
                                  });
                              }}>
                                <Card
                                image={{
                                  uri: item.pic_url
                                }}
                              >
                                  <Text style={styles.titleText}>
                                      {`${item.act_name}`}
                                  </Text>
                                  <Text style={{ fontSize: 16, color: 'black', margin: 5}}>
                                      {moment(`${item.act_date}`).format('dddd') + ', ' + moment(`${item.act_date}`).format('MMMM Do YYYY, h:mm a')}
                                  </Text>
                                  <Text style={{ fontSize: 16, color: 'black' }}>
                                      {`${item.loc_address}`}
                                  </Text>
                                  <Text style={{ fontSize: 16, color: 'black' }}>
                                      {`${item.loc_name}`}
                                  </Text>
                                  <Text style={{ fontSize: 16, color: 'black' }}>
                                      ${`${item.cost}`}
                                  </Text>
                                  </Card>
                          </TouchableHighlight>
                        </View>
                    } />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    toolbar: {
        backgroundColor: '#FF4500',
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row'
    },
    toolbarTitle: {
        color: '#fff',
        width: 150,
        fontSize: 25,
        textAlign: 'center',
        //flex: 1,
    },
    toolbarFilter: {
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 50,
    },
    toolbarLocation: {
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 0,

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 20
    },
    titleText: {
        fontFamily: 'serif',
        fontSize: 24,
        color: 'black',
    },
    headerText: {
        fontSize: 27,
        fontFamily: 'serif',
        color: 'black',
    },
    itemText: {
        color: 'blue',
        fontFamily: 'serif',
        fontSize: 22,
        textAlign: 'center',
    },
    backButton: {
        flex: 1,
        width: 75,
        fontFamily: 'serif',
        fontSize: 20,
        color: 'white'
    },
    inputText: {
        fontFamily: 'serif',
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

});
