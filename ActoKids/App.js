
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */

import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import EnterEvent from './EnterEvent';
import FilterPage from './FilterPage';




const bottomNav = createBottomTabNavigator({
    HomePage: {screen: HomePage  },
    CalendarPage: {screen: CalendarPage},
    FilterPage: { screen: FilterPage },
    About: { screen: DetailsPage }
},
 {

  // Buttom Tab Texts navigation
tabBarOptions: {
  activeTintColor: '#F8F8FF', 
  
  labelStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  style: {
    backgroundColor: '#FF4500',
  
  }
}

    });

const topNav = createMaterialTopTabNavigator ({
    FilterPage: { screen: FilterPage }
},
    {

        // Buttom Tab Texts navigation
        tabBarOptions: {
            activeTintColor: '#F8F8FF',

            labelStyle: {
                fontSize: 16,
                fontWeight: '600',
            },
            style: {
                backgroundColor: '#FF4500',

            }
        }

    });


export default bottomNav;
