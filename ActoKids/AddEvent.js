import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text
} from 'react-native';

import t from 'tcomb-form-native';

import moment from 'moment';

const Form = t.form.Form;

const ActivityType = t.enums({
  Outdoors: 'Outdoors/Nature',
  Sports: 'Sports',
  Music: 'Music',
  Zoo: 'Zoo',
  Art: 'Art',
  Camp: 'Camps',
  Museum: 'Museum',
  Other: 'Other'
});

const DisabilityType = t.enums({
  Cognitive: 'Cognitive',
  Mobility: 'Mobility',
  Hearing: 'Hearing',
  Vision: 'Vision',
  Sensory: 'Sensory',
  Other: 'Other'
});

const Event = t.struct({
  eventName: t.String,
  organization: t.String,
  date: t.Date,
  startTime: t.Date,
  endTime: t.Date,
  contactNumber: t.Number,
  cost: t.Number,
  address: t.String,
  city: t.String,
  state: t.String,
  country: t.String,
  zipCode: t.Number,
  wheelchairAccessible: t.Boolean,
  wheelchairAccessibleRestroom: t.Boolean,
  activityType: t.list(ActivityType),
  disabilityType: t.list(DisabilityType),
  youngestAge: t.Number,
  oldestAge: t.Number,
  parentParticipation: t.Boolean,
  assistantProvided: t.Boolean,
  equipmentProvided: t.maybe(t.String),
  siblingParticipation: t.Boolean,
  staffRatio: t.maybe(t.Number),
  interpreterAvailable: t.Boolean,
  hearingLoopAvailable: t.Boolean,
  chargeForAttendant: t.Boolean,
  serviceAnimalsAllowed: t.Boolean,
  childcareOnsite: t.Boolean
});

const options = {
  fields: {
    eventName: {
      label: 'Event Name*',
      error: 'Event field empty'
    },
    organization: {
      label: 'Organization*',
      error: 'Organization field empty'
    },
    date: {
      label: 'Date*',
      mode: 'date',
      error: 'You must select a date',
      config: {
        format: date => moment(date).format('dddd, MMMM Do YYYY')
      }
    },
    startTime: {
      label: 'Start Time*',
      mode: 'time',
      error: 'You must select a start time',
      config: {
        defaultValueText: 'Tap here to select a start date (24hr format)',
        format: date => moment(date).format('h:mm a')
      }
    },
    endTime: {
      label: 'End Time*',
      mode: 'time',
      error: 'You must select an end time',
      config: {
        defaultValueText: 'Tap here to select an end date (24hr format)',
        format: date => moment(date).format('h:mm a')
      }
    },
    contactNumber: {
      label: 'Contact #*',
      placeholder: '123 456-7890',
      error: 'Contact field empty',
    },
    cost: {
      label: 'Cost*',
      help: 'Enter 0 for \'Free\'',
      placeholder: '$15.00',
      error: 'Cost field empty',
    },
    address: {
      label: 'Location*',
      placeholder: 'Street Address',
      error: 'Address field empty'
    },
    city: {
      auto: 'none',
      placeholder: 'City',
      error: 'City field empty'
    },
    state: {
      auto: 'none',
      placeholder: 'State eg. (WA)',
      error: 'State field empty'
    },
    country: {
      auto: 'none',
      placeholder: 'Country',
      error: 'Country field empty'
    },
    zipCode: {
      auto: 'none',
      placeholder: 'Zip Code',
      error: 'Zip code field empty'
    },
    activityType: {
      label: 'Add 1 or more Activity Types*',
      disableOrder: true,
      item: {
        nullOption: false,
        label: 'Options'
      }
    },
    wheelchairAccessible: {
      label: 'Wheelchair Accesible'
    },
    wheelchairAccessibleRestroom: {
      label: 'Wheelchair Accesible Restroom'
    },
    disabilityType: {
      label: 'Disability Types*',
      disableOrder: true,
      item: {
        nullOption: false,
        label: 'Options'
      }
    },
    youngestAge: {
      label: 'Age Range*',
      placeholder: 'Youngest',
      error: 'Youngest field empty'
    },
    oldestAge: {
      auto: 'none',
      placeholder: 'Oldest',
      error: 'Oldest field empty'
    },
    parentParticipation: {
      label: 'Parent Participation Required'
    },
    assistantProvided: {
      label: 'Assistant Provided'
    },
    equipmentProvided: {
      label: 'Equipment Provided',
      placeholder: 'List all equipment provided by your organization'
    },
    siblingParticipation: {
      label: 'Sibling Participation Allowed'
    },
    staffRatio: {
      label: 'Kid to Staff Ratio',
      placeholder: '1.5'
    },
    interpreterAvailable: {
      label: 'ASL Interpreter Available'
    },
    hearingLoopAvailable: {
      label: 'Closed-Circuit Hearing Loop Available'
    },
    chargeForAttendant: {
      label: 'Additional Charge for Personal Care Attendant'
    },
    serviceAnimalsAllowed: {
      label: 'Can Accomodate Service Animals'
    },
    childcareOnsite: {
      label: 'On-Site Child Care'
    }
  },
  i18n: {
    optional: '',
    required: '',
    add: 'Add',
    remove: '✘'
  }
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
      console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Form
            ref={c => this._form = c}
            type={Event}
            options={options}
            />
            <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
