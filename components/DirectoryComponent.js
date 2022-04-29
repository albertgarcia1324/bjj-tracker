import React, { Component } from "react";
import CampsiteInfo from "./CampsiteInfo";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { GYMS } from "../shared/mdgyms";
import { createStackNavigator } from "react-navigation-stack";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      gyms: GYMS,
    };
  }

  static navigationOptions = {
    title: "State",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          style={{ paddingTop: 40 }}
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("CampsiteInfo", { gymId: item.id })}
          leftAvatar={{ source: require("./images/maryland.png") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
