import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { PARTNERS } from "../shared/partners";

function Mission() {
  return (
    <View style={styleSheet.Container}>
      <Card title="The Goal" containerStyle={styleSheet.Title}>
        <Card containerStyle={styleSheet.CardContainer}>
          <Text style={{ margin: 10, textAlign: "left" }}>
            Welcome! I hold the rank of purple belt in Brazilian Jiu-Jitsu and
            live in the Maryland/DC/Virginia area and created this app to enable
            you to find various gym's in the area quickly and efficiently. I
            have trained for many years and have learned that you can improve
            faster by training consistenly over a long period of time and
            tracking your training. Furthermore, this app contains a training
            log to help you keep track of the amount of hours you train.
            Jiu-Jitsu is extremely hard and takes years of practice, by tracking
            the actual hours you train will better enable you to adjust your
            training schedule.
          </Text>
        </Card>
      </Card>
    </View>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require("./images/bootstrap-logo.png") }}
        />
      );
    };
    return (
      <ScrollView style={styleSheet.Container}>
        <Mission />
        <Card title="Features" containerStyle={styleSheet.CardContainer}>
          <FlatList
            data={this.state.partners}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPartner}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styleSheet = StyleSheet.create({
  Container: {
    backgroundColor: "#30475E",
    paddingTop: 15,
  },
  CardContainer: {
    backgroundColor: "#F5F5F5",
  },
  Title: {
    color: "red",
  },
});

export default About;
