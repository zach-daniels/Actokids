
/**Home page for our app */
import React, { Component } from 'react';

import CardView from 'react-native-cardview';

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


import SearchPage from './SearchPage';
import EnterEvent from './EnterEvent';
import FilterPage from './FilterPage';

import App from './App';


export default class HomePage extends Component {
  //Added Tab Bottom Navigation 
  static navigationOptions = {
    //title: 'Welcome',
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
      const response = await fetch('http://demodude1.azurewebsites.net/');
      const json = await response.json();
      this.setState({ data: json });
    };

  

  render() {
    const { navigate } = this.props.navigation;
    return (     
    <View style={styles.container}>
            
            <View style={styles.toolbar}>
                <Text style={styles.toolbarTitle}>Acto Kids</Text>
                
                {/*Filter: icon */}
                <TouchableOpacity 
                    style={styles.toolbarFilter}
                      //onPress={()=>{this.FilterPage}}
                        onPress= {() => navigate('FilterPage')}>
                      <Image
                        source={require('./images/filter.png')}
                        />
                </TouchableOpacity>

                {/**Location: icon*/}
                <TouchableOpacity 
                    style={styles.toolbarLocation}
                    onPress = {() => {console.log('location icon pressed')}}>
                   
                      <Image
                        source={require('./images/location.png')}
                        />
                  </TouchableOpacity>
            </View>


              {/**CardView */}
             <View style={styles.MainContainer}>
              <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
                paddingBottom={10}
                style={styles.cardViewStyle}>
                   <Image
                        source={require('./images/kids.jpg')}
                        style={{width: 300,height: 100}}
                        />
                      <Text style={styles.cardView_InsideText}> Simple CardView </Text>
                      <Text style={styles.cardView_InsideText}> Simple CardView #2 </Text>
                     
              </CardView>   
          </View>

            
  
    
         {/* <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i.toString()}
            renderItem={ ({item}) =>
            <View style={{marginBotton: 30}}>
                <Image
                    source = {{ uri: item.pic_url }}
                    style = {{height: 250, margin: 3}}/>

                  <Text style={{fontSize: 20, color: 'black'}}>
                        {`${item.act_name}`}
                  </Text>

                    <Text style={{ fontSize: 20, color: 'black' }}>
                        {`${item.loc_name}`}
                    </Text>
                  <Text style={{ fontSize: 20, color: 'black' }}>
                        {`${item.loc_address}`}
                  </Text>
                  <Text style={{ fontSize: 20, color: 'black' }}>
                        {`${item.act_date}`}
                  </Text>
                  <Text style={{ fontSize: 20, color: 'black' }}>
                        {`Contact: ${item.cont_name}`}
                    </Text>
                  </View>}/> */}

        


            {/**Search Icon */}
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

  MainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
 
  cardViewStyle:{
    width: 350, 
    height: 250,
 
  },
 
  cardView_InsideText:{
 
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center', 
    marginTop: 50,  
  },


  //------------------------------
  container: {
    flex: 1, 
    backgroundColor: 'lightgray',
  },

  toolbar:{
    backgroundColor: '#FF4500',
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row'
   },
   toolbarTitle:{
     color: '#fff',
     width: 150,
     fontSize: 25,
     textAlign: 'center',
     
   },
   toolbarFilter:{
     width: 50,
     position: 'absolute',
     bottom: 10,
     right: 50,
   },
   toolbarLocation: {
      width: 50,
      position: 'absolute',
      bottom: 10,
      right: 0,
      
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

   
  titleText:{
    fontFamily: 'serif',
    fontSize: 32, 
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
