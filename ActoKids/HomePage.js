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


import SearchPage from './SearchPage';
import EnterEvent from './EnterEvent';
import FilterPage from './FilterPage';



export default class HomePage extends Component {
    //Added Tab Bottom Navigation
    static navigationOptions = {
        title: 'Welcome',
        tabBarLabel: 'Activities',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/activity.png')}
                style={[{ width: 26 }, { height: 26 }, { tintColor: tintColor }]}
            />
        )
    };


    state = {
        data: []
    };
    componentWillMount() {
        this.fetchData();
    }

    /// get image from json
    fetchData = async () => {
        const response = await fetch('http://demodude1.azurewebsites.net/');
        const json = await response.json();
        this.setState({ data: json });
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Acto Kids</Text>

                    {/*Filter: icon */}
                    <TouchableOpacity
                        style={styles.toolbarFilter}

                        onPress={() => { console.log("Filter icon pressed") }}>
                        <Image
                            source={require('./images/filter.png')}
                        />
                    </TouchableOpacity>



                    {/**Location: icon*/}
                    <TouchableOpacity
                        style={styles.toolbarLocation}
                        onPress={() => { console.log('location icon pressed') }}>

                        <Image
                            source={require('./images/location.png')}
                        />
                    </TouchableOpacity>
                </View>


                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({ item }) =>
                        <View style={{ marginBotton: 30 }}>
                          <TouchableHighlight
                              onPress={() => {
                                  this.props.navigation.navigate('CalendarPage', {
                                      activity_name: `${item.act_name}`,

                                      activity_date: `${item.act_date}`,
                                      cost: `${item.cost}`,
                                      org_name: `${item.org_name}`,
                                      location_name: `${item.loc_name}`,
                                      location_address: `${item.loc_address}`,
                                      contact_name: `${item.cont_name}`,
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
                                  <Text style={{ fontSize: 20, color: 'black' }}>
                                      {`${item.act_name}`}
                                  </Text>
                                  <Text style={{ fontSize: 20, color: 'black' }}>
                                      {`${item.loc_name}`}
                                  </Text>
                                  <Text style={{ fontSize: 20, color: 'black' }}>
                                      {`${item.loc_address}`}
                                  </Text>
                                  <Text style={{ fontSize: 20, color: 'black' }}>
                                      {`${item.act_date}`}
                                  </Text>
                                  <Text style={{ fontSize: 20, color: 'black' }}>
                                      {`Contact: ${item.cont_name}`}
                                  </Text>
                                  </Card>
                          </TouchableHighlight>
                        </View>
                    } />


                {/**Search Icon */}
                <TouchableHighlight style={styles.searchButton}
                    underlayColor='#ff7043'
                    onPress={() => { console.log('pressed') }}>
                    <Image
                        source={require('./images/search.png')}
                    />
                </TouchableHighlight>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
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

    searchButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 20
    },


    titleText: {
        fontFamily: 'serif',
        fontSize: 32,
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
