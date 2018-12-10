import React, { Component } from 'react';
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

//const { navigation } = this.props.navigate;

class DetailsPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>About Us Information</Text>
                <Text style={styles.welcome}>TODO, 1) Actokids mission statement 2) Briefs about the organizations memebers</Text>
            </View>
        );
    }
}

export class Organization extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Terms of Service Information</Text>
                <Text style={styles.welcome}>TODO, 1) User expectations 2) Actokids expectations 3) Boilerplate 4) marketplace specific text</Text>
            </View>
        );
    }
}


export default createMaterialTopTabNavigator({
    About: DetailsPage,
    Terms: Organization
},
    {
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: '#FF4500'
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
