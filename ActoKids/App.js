
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */
import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import AddEvent from './AddEvent';
import FilterPage from './FilterPage';


const HomeStack = createStackNavigator(
    {
        Activities: { screen: HomePage },
        FilterPage: { screen: FilterPage },
        Calendar: { screen: CalendarPage }
    },
    {
        defaultNavigationOptions: {
            title: 'Actokids',
            activeTintColor: 'black',
            headerTintColor: '#F8F8FF',
            headerStyle: {
                backgroundColor: '#FF4500',
            },
        },
        
    }
);

const CalandarStack = createStackNavigator({
    Calendar: { screen: CalendarPage }
});

const EventStack = createStackNavigator({
    Add: { screen: AddEvent }
});

const AboutStack = createStackNavigator({
    About: { screen: DetailsPage }
});

const Tabs = createBottomTabNavigator({
    Activities: HomeStack,
    Calendar: CalandarStack,
    Add: EventStack,
    About: AboutStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: '#FF4500',
            },
            showIcon: true
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Activities') {
                    return <Image
                        source={require('./images/activity.png')}
                        style={[{ width: 26 }, { height: 26 }]}
                    />
                } else if (routeName === 'Calendar') {
                    return <Image
                        source={require('./images/calendar.png')}
                        style={[{ width: 26 }, { height: 26 }]}
                    />
                } else if (routeName === 'Add') {
                    return <Image
                        source={require('./images/favorite.png')}
                        style={[{ width: 26 }, { height: 26 }]}
                    />
                } else if (routeName === 'About') {
                    return <Image
                        source={require('./images/user.png')}
                        style={[{ width: 26 }, { height: 26 }]}
                    />
                }

                return <Image
                    source={require('./images/filter.png')}
                    style={[{ width: 26 }, { height: 26 }]}
                />

            },
        }),
        
    }
);

export default createAppContainer(Tabs);
