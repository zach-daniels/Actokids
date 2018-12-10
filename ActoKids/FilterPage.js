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

import { CheckBox, Button} from 'react-native-elements';


export default class FilterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 100
        };
    }
    applyfilter = () => {
        let curl = 'http://actokids2.azurewebsites.net/?filter=true';
        if (this.state.outdoor_checked) {
            curl = curl + '&Outdoors=true';
        }
        if (this.state.music_checked) {
            curl = curl + '&Music=true';
        }
        if (this.state.art_checked) {
            curl = curl + '&Art=true';
        }
        if (this.state.museum_checked) {
            curl = curl + '&Museum=true';
        }
        if (this.state.sports_checked) {
            curl = curl + '&Sports=true';
        }
        if (this.state.zoo_checked) {
            curl = curl + '&Zoo=true';
        }
        if (this.state.camp_checked) {
            curl = curl + '&Camp=true';
        }
        if (this.state.otherstype_checked) {
            curl = curl + '&TypeOthers=true';
        }
        if (this.state.cognitive_checked) {
            curl = curl + '&Cognitive=true';
        }
        if (this.state.sensory_checked) {
            curl = curl + '&Sensory=true';
        }
        if (this.state.vision_checked) {
            curl = curl + '&Vision=true';
        }
        if (this.state.mobility_checked) {
            curl = curl + '&Mobility=true';
        }
        if (this.state.hearing_checked) {
            curl = curl + '&Hearing=true';
        }
        if (this.state.otherdisb_checked) {
            curl = curl + '&Others=true';
        }
        //alert(curl);
        this.props.navigation.navigate('HomePage', {
            url: curl,
            call: true,
        });
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.headTitle}>
                    Activity Types</Text>
                <View>
                    <CheckBox
                        title="Outdoors & Nature"
                        checked={this.state.outdoor_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ outdoor_checked: !this.state.outdoor_checked })
                        }}
                    />
                    <CheckBox
                        title="Music"
                        checked={this.state.music_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ music_checked: !this.state.music_checked })
                        }}

                    />
                    <CheckBox
                        title="Art"
                        checked={this.state.art_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ art_checked: !this.state.art_checked })
                        }}
                    />
                    <CheckBox
                        title="Museum"
                        checked={this.state.museum_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ museum_checked: !this.state.museum_checked})
                        }}
                    />
                    <CheckBox
                        title="Sports"
                        checked={this.state.sports_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ sports_checked: !this.state.sports_checked})
                        }}
                    />
                    <CheckBox
                        title="Zoo"
                        checked={this.state.zoo_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ zoo_checked: !this.state.zoo_checked })
                        }}
                    />
                    <CheckBox
                        title="Camp"
                        checked={this.state.camp_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ camp_checked: !this.state.camp_checked })
                        }}
                    />
                    <CheckBox
                        title="Others"
                        checked={this.state.otherstype_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ otherstype_checked: !this.state.otherstype_checked})
                        }}
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
                        checked={this.state.cognitive_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ cognitive_checked: !this.state.cognitive_checked})
                        }}
                    />
                    <CheckBox
                        title="Sensory"
                        checked={this.state.sensory_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ sensory_checked: !this.state.sensory_checked })
                        }}
                    />
                    <CheckBox
                        title="Vision"
                        checked={this.state.vision_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ vision_checked: !this.state.vision_checked })
                        }}
                    />
                    <CheckBox
                        title="Mobility"
                        checked={this.state.mobility_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ mobility_checked: !this.state.mobility_checked })
                        }}
                    />
                    <CheckBox
                        title="Hearing"
                        checked={this.state.hearing_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ hearing_checked: !this.state.hearing_checked })
                        }}
                    />
                    <CheckBox
                        title="Other"
                        checked={this.state.otherdisb_checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => {
                            this.setState({ otherdisb_checked: !this.state.otherdisb_checked })
                        }}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    <Button
                      style={{
                        width: "100%"
                      }}
                      buttonStyle={{
                        width: "100%",
                        borderRadius: 20
                      }}
                      onPress={() => {
                        this.applyfilter()
                      }}
                      title="Apply" />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                    style={{
                        width: "100%"
                      }}
                      buttonStyle={{
                        width: "100%",
                        borderRadius: 20
                      }}
                      onPress={() => {
                        this.props.navigation.navigate('HomePage', {
                            url: 'http://actokids2.azurewebsites.net/',
                            call: true,
                          });
                        }}
                        title="Reset" />
                  </View>
                </View>
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
    buttonsContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: 5
  },
});
