import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { GYMS } from "../shared/mdgyms";

function RenderGym(props) {
  return (
    <View style={styleSheet.Container}>
      {GYMS.map((gym) => {
        return (
          <Card style={styleSheet.MainContainer}>
            <View>
              <Text style={styleSheet.TextHeader}>{gym.name}</Text>
              <Text style={styleSheet.TextContainer}>{gym.description}</Text>
              <Text style={styleSheet.TextContainer}>{gym.address}</Text>
              <Text style={styleSheet.TextContainer}>{gym.phone}</Text>
            </View>
          </Card>
        );
      })}
    </View>
  );

  // if (gym) {
  //   return (
  //     <SafeAreaView>
  //       <Card>
  //         <View>
  //           <Text>{gym.name}</Text>
  //           <Text>{gym.description}</Text>
  //           <Text>{gym.address}</Text>
  //           <Text>{gym.phone}</Text>
  //         </View>
  //       </Card>
  //     </SafeAreaView>
  //   );
  // }
  // return <View />;
}

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gyms: GYMS,
    };
  }

  static navigationOptions = {
    title: "Jiu-Jitsu Gym's",
  };

  markFavorite() {
    this.setState({ favorite: true });
  }

  render() {
    // const campsiteId = this.props.navigation.getParam("campsiteId");
    const gymId = this.props.navigation.getParam("gymId");
    // const campsite = this.state.campsites.filter(
    //   (campsite) => campsite.id === campsiteId
    // )[0];
    const gym = this.state.gyms.filter((gym) => gym.id === gymId)[0];
    return (
      <ScrollView>
        <RenderGym gym={gym}></RenderGym>
      </ScrollView>
    );
  }
}

const styleSheet = StyleSheet.create({
  Container: {
    backgroundColor: "#30475E",
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextHeader: {
    textAlign: "center",
    fontSize: 24,
  },

  TextContainer: {
    textAlign: "center",
    margin: 8,
    fontSize: 16,
  },
});

export default CampsiteInfo;
