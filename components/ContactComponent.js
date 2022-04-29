import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView style={styleSheet.Container}>
        <Card
          title="Contact Information"
          wrapperStyle={{ margin: 20 }}
          containerStyle={styleSheet.CardContainer}
        >
          <Text>Annapolis, Maryland</Text>
          <Text style={{ marginBottom: 10 }}>United States</Text>
          <Text>Email: jiu-jitsu-tracker@gmail.com</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styleSheet = StyleSheet.create({
  Container: {
    backgroundColor: "#30475E",
  },
  CardContainer: {
    backgroundColor: "#F5F5F5",
  },
});

export default Contact;
