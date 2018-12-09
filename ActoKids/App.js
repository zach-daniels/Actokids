
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */
import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import FilterPage from './FilterPage';
import AddEvent from './AddEvent';
import Activities from './Activities';
import Organization from './Organization';

const ActivityStack = createMaterialTopTabNavigator({
    Activities: { screen: Activities },
    Organization: { screen: Organization }
});

const HomeStack = createStackNavigator(
    {
        HomePage: { screen: HomePage },
        FilterPage: { screen: FilterPage },
        ActivityStack: ActivityStack
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

const AddStack = createStackNavigator({
    AddEvent: { screen: AddEvent }
});

const AboutStack = createStackNavigator({
    About: { screen: DetailsPage }
});

const Tabs = createBottomTabNavigator({
    Activities: HomeStack,
    Calendar: { screen: CalendarPage},
    Add: AddStack,
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
