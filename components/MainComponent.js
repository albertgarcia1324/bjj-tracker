// import React, { Component } from "react";
// import Home from "./HomeComponent";
// import Directory from "./DirectoryComponent";
// import CampsiteInfo from "./CampsiteInfo";
// import Training from "./TrainingComponent";
// import About from "./AboutComponent";
// import Contact from "./ContactComponent";
// import Constants from "expo-constants";
// import {
//   View,
//   Platform,
//   StyleSheet,
//   Text,
//   ScrollView,
//   Image,
// } from "react-native";
// import { createStackNavigator } from "react-navigation-stack";
// import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
// import { Icon } from "react-native-elements";
// import SafeAreaView from "react-native-safe-area-view";

// const GymNavigator = createStackNavigator(
//   {
//     Directory: {
//       screen: Directory,
//       navigationOptions: ({ navigation }) => ({}),
//     },
//     CampsiteInfo: { screen: CampsiteInfo },
//   },
//   {
//     initialRouteName: "CampsiteInfo",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#30475E",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     },
//   }
// );

// const HomeNavigator = createStackNavigator(
//   {
//     Home: { screen: Home },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#30475E",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//       headerLeft: (
//         <Icon
//           name="home"
//           type="font-awesome"
//           iconStyle={styles.stackIcon}
//           onPress={() => navigation.toggleDrawer()}
//         />
//       ),
//       header: <Text></Text>,
//     }),
//   }
// );

// const TrainingNavigator = createStackNavigator(
//   {
//     Training: { screen: Training },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#30475E",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     }),
//   }
// );

// const AboutNavigator = createStackNavigator(
//   {
//     About: { screen: About },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#30475E",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     }),
//   }
// );

// const ContactNavigator = createStackNavigator(
//   {
//     Contact: { screen: Contact },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "#30475E",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     }),
//   }
// );

// const CustomDrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{ top: "always", horizontal: "never" }}
//     >
//       <View style={styles.drawerHeader}>
//         <View style={{ flex: 1 }}>
//           <Image
//             source={require("./images/maryland.png")}
//             style={styles.drawerImage}
//           />
//         </View>
//         <View style={{ flex: 2 }}>
//           <Text style={styles.drawerHeaderText}>Jiu-Jitsu Tracker</Text>
//         </View>
//       </View>
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

// const MainNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeNavigator,
//       navigationOptions: {},
//     },
//     Training: {
//       screen: DirectoryNavigator,
//       navigationOptions: {
//         drawerLabel: "Gym's",
//       },
//     },
//     About: {
//       screen: AboutNavigator,
//       navigationOptions: {
//         drawerLabel: "About",
//       },
//     },
//     Contact: {
//       screen: ContactNavigator,
//       navigationOptions: {
//         drawerLabel: "Contact",
//       },
//     },
//   },
//   {
//     drawerBackgroundColor: "white",
//     contentComponent: CustomDrawerContentComponent,
//   }
// );

// const AppNavigator = createAppContainer(MainNavigator);

// class Main extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
//         }}
//       >
//         <AppNavigator />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   drawerHeader: {
//     backgroundColor: "#30475E",
//     height: 140,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     flexDirection: "row",
//   },
//   drawerHeaderText: {
//     color: "#fff",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   drawerImage: {
//     margin: 10,
//     height: 60,
//     width: 60,
//   },
//   stackIcon: {
//     marginLeft: 10,
//     color: "#fff",
//     fontSize: 24,
//   },
// });

// export default Main;

import * as React from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfo";
import Training from "./TrainingComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GYMS } from "../shared/mdgyms";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#F05454"
      inactiveColor="#30475E"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#F5F5F5" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gym's"
        component={CampsiteInfo}
        options={{
          tabBarLabel: "Gym's",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarLabel: "Training",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
