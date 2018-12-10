
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */
import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import EnterEvent from './EnterEvent';
import FilterPage from './FilterPage';
import Activities from './Activities';
import Organization from './Organization';


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
    Event: { screen: EnterEvent }
});

const AboutStack = createStackNavigator({
    About: { screen: Activities }
});

const TopNavigator = createMaterialTopTabNavigator({
    Activity: Activities,
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


const Tabs = createBottomTabNavigator({
    Activities: HomeStack,
    Calendar: CalandarStack,
    Event: EventStack,
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
                } else if (routeName === 'Event') {
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