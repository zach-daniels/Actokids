import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const EventScreen = ({navigation}) => <Text> {'EventScreen: ' + JSON.stringify(navigation.state.params)} </Text>;


const ExpensesListScreen = ({navigation}) => <Text> {'ExpensesListScreen: ' + JSON.stringify(navigation.state.params)} </Text>;


const EventsScreen = ({navigation}) => <Button onPress={ () => navigation.navigate('EventStack', {test: 1} ) } title='EventsScreen' />;

const EventTabNavigator = createMaterialTopTabNavigator( {
  Event: { screen: EventScreen },
  ExpensesList: { screen: ExpensesListScreen, }
});

const EventsModalNavigator = createStackNavigator( {
  Events: { screen: EventsScreen, },
});

const ProtectedNavigator = createStackNavigator( { 
  EventsModal: { screen: EventsModalNavigator, },
  EventStack: { screen: EventTabNavigator, },
}, 
{
  headerMode: 'none',
} );

export default class App extends React.Component {
  render() {
    return (
      <ProtectedNavigator/>
    );
  }
}