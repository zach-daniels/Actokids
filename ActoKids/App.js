
/**Describes the different pages the app can have and defines
 * navigation through the app, also sets up the initial page
 */

/** @format */
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import DetailsPage from './DetailsPage';
import EnterEvent from './EnterEvent';
import FilterPage from './FilterPage';


const HomeStack = createStackNavigator(
    {
        Activities: { screen: HomePage },
        FilterPage: { screen: FilterPage }
    },
    {
        defaultNavigationOptions: {
            title: 'Actokids',
            headerTintColor: '#F8F8FF',
            headerStyle: {
                backgroundColor: '#FF4500',
            },
        }
    }
);

const CalandarStack = createStackNavigator({
    Calendar: { screen: CalendarPage }
});

const EventStack = createStackNavigator({
    Event: { screen: EnterEvent }
});

const AboutStack = createStackNavigator({
    About: { screen: DetailsPage }
});

const Tabs = createBottomTabNavigator({
    Activities: HomeStack,
    Calendar: CalandarStack,
    Event: EventStack,
    About: AboutStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#FF4500',
            }
        }
    }
);

export default createAppContainer(Tabs);
