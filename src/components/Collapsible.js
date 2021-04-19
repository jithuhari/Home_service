import * as React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../config/colors';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section
      style={{backgroundColor: Colors.continercolor, borderRadius: 15}}
      title="Top questions"
      titleStyle={{
        color: Colors.primarycolor,
        fontWeight: 'bold',
        fontSize: 16,
      }}>
      <List.Accordion
        title="How to book a service on HOME SERVE?"
        style={{padding: 0, margin: 0}}
        titleStyle={{
          color: Colors.primarycolor,
          fontSize: 14,
          borderBottomColor: 'rgba(51, 52, 88, 0.06)',
          borderBottomWidth: 2,
        }}>
        <List.Item
          titleStyle={{fontSize: 0, padding: 0, margin: 0}}
          style={{margin: 0, padding: 0}}
          descriptionStyle={{
            fontSize: 10,
            // top: -30,
            color: Colors.primarycolor,
          }}
          description="“Amet minim mollit non deserunt uAmet minim mollit non deserunt u mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit non deserunt uAmet minim mollit non deserunt u Amet minim mollit non Amet minim mollit non.”"
        />
      </List.Accordion>
      {/* second */}
      <List.Accordion
        title="Who is going to fulfill the service?"
        style={{padding: 0, margin: 0}}
        titleStyle={{
          color: Colors.primarycolor,
          fontSize: 14,
          borderBottomColor: 'rgba(51, 52, 88, 0.06)',
          borderBottomWidth: 2,
        }}>
        <List.Item
          titleStyle={{fontSize: 0, padding: 0, margin: 0}}
          descriptionStyle={{
            fontSize: 10,
            // top: -30,
            color: Colors.primarycolor,
          }}
          description="“Amet minim mollit non deserunt uAmet minim mollit non deserunt u mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit non deserunt uAmet minim mollit non deserunt u Amet minim mollit non Amet minim mollit non.”"
        />
      </List.Accordion>
      {/* 3 */}
      <List.Accordion
        title="Who is HOME SERVE partner?"
        style={{padding: 0, margin: 0}}
        titleStyle={{
          color: Colors.primarycolor,
          fontSize: 14,
          borderBottomColor: 'rgba(51, 52, 88, 0.06)',
          borderBottomWidth: 2,
        }}>
        <List.Item
          titleStyle={{fontSize: 0, padding: 0, margin: 0}}
          descriptionStyle={{
            fontSize: 10,
            // top: -30,
            color: Colors.primarycolor,
          }}
          description="“Amet minim mollit non deserunt uAmet minim mollit non deserunt u mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit non deserunt uAmet minim mollit non deserunt u Amet minim mollit non Amet minim mollit non.”"
        />
      </List.Accordion>
      {/* 4 */}
      <List.Accordion
        title="What all services are available on HOME SERVE?"
        style={{padding: 0, margin: 0}}
        titleStyle={{
          color: Colors.primarycolor,
          fontSize: 14,
          borderBottomColor: 'rgba(51, 52, 88, 0.06)',
          borderBottomWidth: 2,
        }}>
        <List.Item
          titleStyle={{fontSize: 0, padding: 0, margin: 0}}
          descriptionStyle={{
            fontSize: 10,
           
            color: Colors.primarycolor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          description="“Amet minim mollit non deserunt uAmet minim mollit non deserunt u mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit non deserunt uAmet minim mollit non deserunt u Amet minim mollit non Amet minim mollit non.”"
        />
      </List.Accordion>

      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: Colors.primarycolor, right: 10}}>
          More FAQs{' '}
          <AntDesign name={'doubleright'} color={Colors.primarycolor} />
        </Text>
      </View>
    </List.Section>
  );
};

export default MyComponent;
