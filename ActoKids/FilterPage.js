/**
 * Displays the available filters and allows the user to submit filters to filter 
 * events displayed
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    ListView,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    View,
    FlatList,
    DatePickerAndroid
} from 'react-native';

import HomePage from './HomePage';

import { CheckBox, Slider, Button, ThemeProvider } from 'react-native-elements';


export default class FilterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 100
        };
    }

    state = {
        outdoors: false,
        music: false,
        art: false,
        museum: false,
        sports: false,
        zoo: false,
        camp: false,
        othersAct: false,
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.headTitle}>
                    Activity Types</Text>
                <View>
                    <CheckBox
                        title="Outdoors & Nature"
                        checked={this.state.checked}
                        onPress={() => {
                            this.state.outdoors = !this.state.outdoors;
                            alert('Outdoors & Nature')
                        }}
                    />
                    <CheckBox
                        title="Music"
                        checked={this.state.checked}
                        onPress={() => {
                            this.state.outdoors = !this.state.outdoors;
                            alert('Outdoors & Nature')
                        }}

                    />
                    <CheckBox
                        title="Art"
                    />
                    <CheckBox
                        title="Museum"
                    />
                    <CheckBox
                        title="Sports"
                    />
                    <CheckBox
                        title="Zoo"
                    />
                    <CheckBox
                        title="Camp"
                    />
                    <CheckBox
                        title="Others"
                    />
                </View>

                <Text style={styles.textLine}>
                    _________________________________________________________
                    </Text>

                <View>
                    <Text style={styles.headTitle}>
                        Disability Types
             </Text>

                    <CheckBox
                        title="Cognitive"
                    />
                    <CheckBox
                        title="Sensory"
                    />
                    <CheckBox
                        title="Vision"
                    />
                    <CheckBox
                        title="Mobility"
                    />
                    <CheckBox
                        title="Hearing"
                    />
                    <Text style={styles.textLine}>
                        _________________________________________________________
           </Text>
                </View>

                <View>
                    <Text style={styles.headTitle}>Frequency</Text>

                    <CheckBox
                        title="One-time"
                    />
                    <CheckBox
                        title="Reoccuring"
                    />


                    <Text style={styles.textLine}>
                        _________________________________________________________
           </Text>
                </View>


                <View>
                    <Text style={styles.headTitle}>
                        Day of Week
             </Text>

                    <CheckBox
                        title="Monday"
                    />
                    <CheckBox
                        title="Tuesday"
                    />
                    <CheckBox
                        title="Wednesday"
                    />
                    <CheckBox
                        title="Thursday"
                    />
                    <CheckBox
                        title="Friday"
                    />
                    <CheckBox
                        title="Saturday"
                    />
                    <CheckBox
                        title="Sunday"
                    />
                    <Text style={styles.textLine}>
                        _________________________________________________________
           </Text>
                </View>



                <View>
                    <Text style={styles.headTitle}>
                        Time of Day
             </Text>

                    <CheckBox
                        title="Morning (Before 12pm)"
                    />
                    <CheckBox
                        title="Evening (After 6pm)"
                    />
                    <CheckBox
                        title="Afternoon"
                    />

                    <Text style={styles.textLine}>
                        _________________________________________________________
           </Text>
                </View>


                <View style={{ flex: 1, marginLeft: 10, marginRight: 10, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text style={styles.headTitle}>
                        Cost (US Dollars)
             </Text>

                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Text>
                        Value: {this.state.value}
                    </Text>

                </View>


                <View style={{ flex: 1, marginLeft: 10, marginRight: 10, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text style={styles.headTitle}>
                        Distance ( Milies )
             </Text>

                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Text>
                        Value: {this.state.value}
                    </Text>
                </View>
                <Button onPress={() => {
                    this.props.navigation.navigate('Activities', {
                        url: 'http://actokids2.azurewebsites.net/?filter=true&zip=98052&Hearing=true&Zoo=true&Mobility=true&Camp=true',
                        call: true,
                    });

                }} title="APPLY FILTER" />
                <Button onPress={() => {
                    this.props.navigation.navigate('Activities', {
                        url: 'http://actokids2.azurewebsites.net/',
                        call: true,
                    });
                }} title="RESET FILTER" />
                   

            </ScrollView>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },

    headTitle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 25,
    },

    textLine: {
        textAlign: 'center',
    },

});