/**
 * Displays the available filters and allows the user to submit filters to filter 
 * events displayed
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  View,
  FlatList,
  DatePickerAndroid
} from 'react-native';

import { CheckBox, Slider, Button, ThemeProvider } from 'react-native-elements';


export default class FilterPage extends Component{

  //Added Tab Bottom Navigation
  static navigationOptions = {
    tabBarLabel: 'Filter',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/filter.png')}
            style={[{ width: 26 }, { height: 26 }, { tintColor: tintColor }]}
        />
    )
};

constructor(props){
  super(props);
    this.state={
      value: 100
    };
}



 



 render() {
   return (
     <ScrollView>
       <Text style={styles.headTitle}>
       Activity Types</Text>
     <View>
         <CheckBox
           title="Outdoors & Nature"
           checked = {this.state.checked}
           />
           <CheckBox
             title="Music"
        
             
             />
             <CheckBox
               title="Art"
               />
               <CheckBox
                 title="Museum"
                 />
                 <CheckBox
                   title="Sports"
                   />
                   <CheckBox
                     title="Zoo"
                     />
                     <CheckBox
                       title="Camp"
                       />
                       <CheckBox 
                         title="Others"
                         />
     </View>

              <Text style={styles.textLine}>               
            _________________________________________________________
                    </Text>

       <View>
             <Text style={styles.headTitle}>
               Disability Types
             </Text>

             <CheckBox
             title="Cognitive"
             />
             <CheckBox
               title="Sensory"
               />
               <CheckBox
                 title="Vision"
                 />
               <CheckBox
                 title="Mobility"
                 />
                 <CheckBox
                   title="Hearing"
                   />
               <Text style={styles.textLine}>               
             _________________________________________________________
           </Text>
       </View>

         <View>
           <Text style={styles.headTitle}>Frequency</Text>

           <CheckBox
             title="One-time"
             />
             <CheckBox
               title="Reoccuring"
               />

            
               <Text style={styles.textLine}>               
             _________________________________________________________
           </Text>
         </View>


         <View>
             <Text style={styles.headTitle}>
               Day of Week
             </Text>

             <CheckBox
             title="Monday"
             />
             <CheckBox
               title="Tuesday"
               />
               <CheckBox
                 title="Wednesday"
                 />
               <CheckBox
                 title="Thursday"
                 />
                 <CheckBox
                   title="Friday"
                   />
                   <CheckBox
                     title="Saturday"
                     />
                     <CheckBox
                       title="Sunday"
                       />
               <Text style={styles.textLine}>               
             _________________________________________________________
           </Text>
       </View>



       <View>
             <Text style={styles.headTitle}>
               Time of Day
             </Text>

             <CheckBox
             title="Morning (Before 12pm)"
             />
             <CheckBox
               title="Evening (After 6pm)"
               />
               <CheckBox
                 title="Afternoon"
                 />
               
               <Text style={styles.textLine}>               
             _________________________________________________________
           </Text>
       </View>


       <View style={{flex: 1, marginLeft: 10, marginRight: 10, alignItems: 'stretch', justifyContent: 'center'}}> 
             <Text style={styles.headTitle}>
               Cost (US Dollars)
             </Text>

               <Slider
                 value={this.state.value}
                 onValueChange={value => this.setState({ value })}
               />
                 <Text>
                   Value: { this.state.value}
                 </Text>
               
       </View>


       <View style={{flex: 1, marginLeft: 10, marginRight: 10, alignItems: 'stretch', justifyContent: 'center'}}> 
             <Text style={styles.headTitle}>
               Distance ( Milies )
             </Text>

               <Slider
                 value={this.state.value}
                 onValueChange={value => this.setState({ value })}
               />
                 <Text>
                   Value: { this.state.value}
                 </Text>
       </View>



     </ScrollView>
      
        );
      }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },

  headTitle:{
    textAlign: 'center',
    color: 'red',
    fontSize: 25,
  },

  textLine:{
    textAlign: 'center',
  },

});

