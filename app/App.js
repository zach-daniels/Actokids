
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */
import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";


import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import FilterPage from './FilterPage';
import AddEvent from './AddEvent';
import Activities from './Activities';

const HomeStack = createStackNavigator(
    {
        HomePage: { screen: HomePage },
        FilterPage: { screen: FilterPage },
        Activities: { screen: Activities},
    },
    {
        defaultNavigationOptions: {
            title: 'Acto Kids',
            activeTintColor: 'black',
            headerTintColor: '#F8F8FF',
            headerStyle: {
                backgroundColor: '#FF4500',
            },
        },

    }
);

const AddStack = createStackNavigator(
  {
    AddEvent: { screen: AddEvent },
  },
  {
    defaultNavigationOptions: {
        title: 'Acto Kids',
        activeTintColor: 'black',
        headerTintColor: '#F8F8FF',
        headerStyle: {
            backgroundColor: '#FF4500',
        },
    },
  }
);

const Tabs = createBottomTabNavigator({
    Activities: HomeStack,
    Submit: AddStack,
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
                } else if (routeName === 'Submit') {
                    return <Image
                        source={require('./images/sharp_add_black_36dp.png')}
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
