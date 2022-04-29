import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("./images/gym.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container1}>
        <Text style={styles.text}>Jiu-Jitsu Tracker</Text>
        <Text style={styles.text1}>
          The app you need to take your training to the next level. Find nearby
          gyms and keep track of your training.
        </Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    flex: 0.5,
    justifyContent: "flex-start",
  },
  text: {
    color: "#F05454",
    fontSize: 37,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  text1: {
    color: "#ECDBBA",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default Home;

// export default Home;

// function RenderItem({ item }) {
//   if (item) {
//     return (
//       <Card featuredTitle={item.name} image={require("./images/maryland.png")}>
//         <Text style={{ margin: 10 }}>{item.description}</Text>
//       </Card>
//     );
//   }
//   return <View />;
// }

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       campsites: CAMPSITES,
//       promotions: PROMOTIONS,
//       partners: PARTNERS,
//     };
//   }

//   static navigationOptions = {
//     title: "Home",
//   };

//   render() {
//     return (
//       <ScrollView>
//         <RenderItem
//           item={this.state.campsites.filter((campsite) => campsite.featured)[0]}
//         />
//         <RenderItem
//           item={
//             this.state.promotions.filter((promotion) => promotion.featured)[0]
//           }
//         />
//         <RenderItem
//           item={this.state.partners.filter((partner) => partner.featured)[0]}
//         />
//       </ScrollView>
//     );
//   }
// }

// export default Home;
