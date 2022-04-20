import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { Text } from "react-native";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>Annapolis, Maryland</Text>
          <Text style={{ marginBottom: 10 }}>United States</Text>
          <Text>Email: jiu-jitsu-tracker@gmail.com</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
