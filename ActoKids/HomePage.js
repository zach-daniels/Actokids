/**Home page for our app */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ListView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';



import {Navigator} from 'react-native-deprecated-custom-components';
import SearchPage from './SearchPage';
import EnterEvent from './EnterEvent';



export default class HomePage extends Component {
  //Added Tab Bottom Navigation 
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Activities',
    tabBarIcon: ({tintColor })=>(
        <Image
            source = {require('./images/activity.png')}
            style = {[{width: 26}, {height: 26}, {tintColor: tintColor}]}
            />
    )
};

state = {
  data: []
};
componentWillMount(){
  this.fetchData();
}

/// get image from json
fetchData = async () => {
  const response = await fetch('https://web6.seattle.gov/Travelers/api/Map/Data?zoomId=18&type=2');
  const json = await response.json();
  this.setState({ data: json.Features });
};

//process image return 
cameraType(camera) {
    if(camera.Type == 'sdot'){
          return  "http://www.seattle.gov/trafficcams/images/"+camera.ImageUrl;
    }else{
          return "http://images.wsdot.wa.gov/nw/"+camera.ImageUrl;
    }
}


//     constructor(props) {
//     super(props);
//       this.state = {id: 1, text: '',
//         dataSource: null
//       } 
//   }
// //brings user to search page
// _navigateSearch(info){
//   this.props.navigator.push({title: 'Search Page', index: 2, 
//     passProps : { data: info.data }
//   })
// }
// //brings user to enter an event 
// _navigateEvent (){
//   this.props.navigator.push({title: 'Add Event', index: 1})
// }
// //retrieves all event to pass into search page display
// get_events() { 
//   var url = 'http://10.0.2.2:3000/api/activities/getAllActivities'
//      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

//       fetch(url)
//         .then((res) => res.json())
//         .then((resJson) => {
//           this._navigateSearch(resJson);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
// }
//displays search page
  render() {
    const { navigate } = this.props.navigation;
    return (     
    <View style={styles.container}>
            <View style={styles.outerApp}>
                <Text style={styles.titleText}>
                  Welcome to ActoKids!
                </Text>
            </View> 
            
  
    <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        renderItem={ ({item}) =>
        <View style={{marginBotton: 30}}>
              <Text style={{fontSize: 20, color: 'black'}}>
                {`${item.Cameras[0].Description}`}
              </Text>
              <Image
                source = {{ uri: this.cameraType(item.Cameras[0]) }}
                style = {{height: 250, margin: 3}}
                />
              </View>
        }/>


            <TouchableHighlight style={styles.searchButton}
             underlayColor='#ff7043' 
             onPress={()=>{console.log('pressed')}}> 
                <Image
                  source = {require('./images/search.png')}
                  />
             
            </TouchableHighlight>
         
       </View>      
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightgray',
  },

  statusBar:{
    height:24,
  },

  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 56,
    flex: 1,
  },

  searchButton:{
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 20
  },

   outerApp: {
    justifyContent: 'flex-start',
    alignItems: 'center',
   // backgroundColor: '#FF4500',
    backgroundColor: '#A9A9A9',
  //backgroundColor: 'red',
  },
  titleText:{
    fontFamily: 'serif',
    fontSize: 32, 
    //color:'white',
    color: 'black',
  },
  headerText: { 
    fontSize: 27,
    fontFamily: 'serif',
    color: 'black',
  },
  itemText: { 
    color:'blue',
    fontFamily: 'serif',
    fontSize:22,
    textAlign: 'center',
  },
  backButton: {
    flex:1,
    width:75,
    fontFamily: 'serif',
    fontSize: 20,
    color:'white'
  },
  inputText: {  
    fontFamily: 'serif',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  }, 
  headerView: {         
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: "center",
}, 

});
