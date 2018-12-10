import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';

import t from 'tcomb-form-native';

import moment from 'moment';

const Form = t.form.Form;

const OrganizationLink = t.refinement(t.String, organizationLink => {
  const reg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return reg.test(organizationLink);
});

OrganizationLink.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'URL field empty';
  } else {
    return 'Invalid URL';
  }
};

const ContactNumber = t.refinement(t.String, contactNumber => {
  const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return reg.test(contactNumber);
});

ContactNumber.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'Contact field empty';
  } else {
    return 'Invalid phone number';
  }
};

const ContactEmail = t.refinement(t.String, contactEmail => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(contactEmail);
});

ContactEmail.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'Email field empty';
  } else {
    return 'Invalid email';
  }
};

const LocationNumber = t.refinement(t.String, locationNumber => {
  const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return reg.test(locationNumber);
});

LocationNumber.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'Contact field empty';
  } else {
    return 'Invalid phone number';
  }
};

const LocationEmail = t.refinement(t.String, locationEmail => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(locationEmail);
});

LocationEmail.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'Email field empty';
  } else {
    return 'Invalid email';
  }
};

const Zip = t.refinement(t.Number, zipCode => {
  const reg = /^\d{5}$/;
  return reg.test(zipCode);
});

Zip.getValidationErrorMessage = function (value, path, context) {
  if (!value) {
    return 'Zip code field empty';
  } else {
    return 'Invalid zip code';
  }
};

const ActivityType = t.enums({
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
  eventDescription: t.String,
  organization: t.String,
  organizationDescription: t.String,
  organizationLink: OrganizationLink,
  date: t.Date,
  startTime: t.Date,
  endTime: t.Date,
  contactName: t.String,
  contactNumber: ContactNumber,
  contactEmail: ContactEmail,
  cost: t.Number,
  locationName: t.String,
  locationNumber: LocationNumber,
  locationEmail: LocationEmail,
  address: t.String,
  city: t.String,
  state: t.String,
  zipCode: Zip,
  activityType: t.list(ActivityType),
  disabilityType: t.list(DisabilityType),
  youngestAge: t.Number,
  oldestAge: t.Number,
  equipmentProvided: t.maybe(t.String),
  staffRatio: t.maybe(t.Number),
  wheelchairAccessible: t.Boolean,
  wheelchairAccessibleRestroom: t.Boolean,
});

const options = {
  fields: {
    eventName: {
      label: 'Event Name*',
      error: 'Event field empty'
    },
    eventDescription: {
      label: 'Event Description*',
      error: 'Description field empty'
    },
    organization: {
      label: 'Organization*',
      error: 'Organization field empty'
    },
    organizationDescription: {
      label: 'Organization Description*',
      error: 'Organization description field empty'
    },
    organizationLink: {
      label: 'Organization URL*',
      placeholder: 'www.website.com'
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
    contactName: {
      label: 'Contact Name*',
      error: 'Contact name field empty'
    },
    contactNumber: {
      label: 'Contact #*',
      placeholder: '123 456-7890',
    },
    contactEmail: {
      label: 'Contact Email*',
      placeholder: 'name@website.com'
    },
    cost: {
      label: 'Cost*',
      help: 'Enter 0 for \'Free\'',
      placeholder: '15.00',
      error: 'Cost field empty'
    },
    locationName: {
      label: 'Location Name*',
      error: 'Location name field empty'
    },
    locationNumber: {
      label: 'Location #*',
      placeholder: '123 456-7890',
    },
    locationEmail: {
      label: 'Location Email*',
      placeholder: 'name@website.com'
    },
    address: {
      label: 'Location Address*',
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
    zipCode: {
      auto: 'none',
      placeholder: 'Zip Code',
    },
    activityType: {
      label: 'Add 1 or more Activity Types*',
      disableOrder: true,
      item: {
        nullOption: {value: '', text: 'Choose an Activity Type'},
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
      label: 'Add 1 or more Disability Types*',
      disableOrder: true,
      item: {
        nullOption: {value: '', text: 'Choose a Disability Type'},
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
    equipmentProvided: {
      label: 'Equipment Provided',
      placeholder: 'List all equipment provided by your organization'
    },
    staffRatio: {
      label: 'Child : Staff Ratio',
      placeholder: '1.5'
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

        var value = this._form.getValue();
        console.log('value: ', value);
        if (value) {
            if (this.validate_submission(value)) {
                fetch('http://actokids2.azurewebsites.net/', {
                    method: 'POST',
                    body: this.bind_form_data(value)
                });

            }
        }
    }
    bind_form_data(value) {
        //Convert the event's date's start timeout
        var eventDate = moment(value.date);
        var stripTime = moment(value.startTime);
        eventDate.set({'hour': stripTime.hour(), 'minute': stripTime.minutes()});
        var dateToSubmit = eventDate.format('YYYY-MM-DD H:mm:ss'); // plug me into act_date
        var endTime = moment(value.endTime);
        let api_data = new FormData();

        alert(dateToSubmit);

        api_data.append("act_name", value.eventName); // done
        api_data.append("act_date", dateToSubmit); // done
        api_data.append("cost", value.cost);
        api_data.append("act_desc", value.eventDescription); // done
        api_data.append("lowest_age", value.youngestAge);
        api_data.append("highest_age", value.oldestAge);
        api_data.append("duration", endTime.hour() - stripTime.hour()); // needs validation
        api_data.append("org_name", value.organization);

        api_data.append("org_desc", value.organizationDescription);
        api_data.append("childratio", value.staffRatio);

        if (value.wheelchairAccessible) {
            api_data.append("wheelchairraccess", 1);
        } else {
            api_data.append("wheelchairraccess", 0);
        }
        if (value.wheelchairrestroom) {
            api_data.append("wheelchairrestroom", 1);
        } else {
            api_data.append("wheelchairrestroom", 0);
        }


        api_data.append("url_link", value.organizationLink); // done
        api_data.append("cont_email", value.contactEmail); // done
        api_data.append("cont_phone", value.contactNumber);
        api_data.append("cont_name", value.contactName); // done
        api_data.append("loc_email", value.locationEmail); // done
        api_data.append("state", value.state);
        api_data.append("zip", value.zipCode);
        api_data.append("city", value.city);
        api_data.append("street", value.address); // done
        api_data.append("loc_address", value.address);
        api_data.append("loc_phone", value.locationNumber);
        api_data.append("loc_name", value.locationName);

        if (value.activityType != null) {
            for (let temp of value.activityType) {
                api_data.append(temp, "true");
            }
        }
        if (value.disabilityType != null) {
            for (let temp of value.disabilityType) {
                if (temp == "Others") {
                    api_data.append("ActOthers", "true");
                } else {
                    api_data.append(temp, "true");
                }
            }
        }

        return api_data;
    }

  validate_submission(value) {
    var currentDate = moment();
    var submittedDate = moment(value.date);
      if (submittedDate.year() < currentDate.year()) {
          Alert.alert(
              'Date Error',
              'Submitted year is in the past'
          );
      } else if (submittedDate.year() <= currentDate.year() && submittedDate.month() < currentDate.month()) {
          Alert.alert(
              'Date Error',
              'Submitted month is in the past'
          );
      } else if (submittedDate.year() <= currentDate.year() && submittedDate.month() <= currentDate.month() && submittedDate.date() < currentDate.date()) {
          Alert.alert(
              'Date Error',
              'Submitted day of month is in the past'
          );
      } else if (moment(value.startTime).hour() > moment(value.endTime).hour()) {
          Alert.alert(
              'Time Error',
              'The end time must come after the start time'
          );
      } else if (value.youngestAge > value.oldestAge) {
          Alert.alert(
              'Ages Range Error',
              'Oldest age allowed must be greater than or equal to youngest age'
          );
      } else {
          return true;
      }
      return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ marginBottom: 5}}>Thank you for contributing to the Acto Kids database.</Text>
          <Text>Required fields are marked with (*).</Text>
          <Form
            ref={c => this._form = c}
            type={Event}
            options={options}
            context={{locale: 'it-IT'}}
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
