import React, {Component} from 'react';
import { Text, View, ImageBackground, Dimensions} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

class Activity extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
                style={{flex:1}}
                source={{uri:"https://hhp-blog.s3.amazonaws.com/2018/05/iStock-494239087.jpg"}}>
                </ImageBackground>
      </View>
    );
  }
}

class Organization extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Organization info</Text>
      </View>
    );
  }
}

const tabBarHeight = 100;

const TabNavigator = createMaterialTopTabNavigator({
  Activity: { screen: Activity },
  Organization: { screen: Organization },
}, {
  tabBarOptions: {
   showLabel: true,
    style: {
        backgroundColor: 'rgba(22, 22, 22, 0)',
        position: 'absolute',
        bottom:  Dimensions.get('window').height-tabBarHeight,
        left:0,
        right:0
    },
    labelStyle:{
      fontSize:15,
      color:"black"
    }
  }});

const App = createAppContainer(TabNavigator)

export default App;