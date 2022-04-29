import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Animatable from "react-native-animatable";
import * as Notifications from "expo-notifications";

class Training extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 1,
      guard: false,
      passing: false,
      back: false,
      submission: false,
      leglock: false,
      escape: false,
      date: new Date(),
      showCalendar: false,
      totalTraining: [],
    };
  }

  static navigationOptions = {
    title: "Training Log",
  };

  handleReservation() {
    console.log(JSON.stringify(this.state));
  }

  // Alert Function
  createAlert = () =>
    Alert.alert(
      "Verify Your Training",
      "Hours Trained Today: " +
        this.state.hours +
        "\n" +
        "\n" +
        "Guard: " +
        this.state.guard +
        "\n" +
        "\n" +
        "Passing: " +
        this.state.passing +
        "\n" +
        "\n" +
        "Back: " +
        this.state.back +
        "\n" +
        "\n" +
        "Submission: " +
        this.state.submission +
        "\n" +
        "\n" +
        "Leg Lock: " +
        this.state.leglock +
        "\n" +
        "\n" +
        "Escapes: " +
        this.state.escape +
        "\n" +
        "\n" +
        "Date: " +
        this.state.date.toLocaleDateString("en-US") +
        "\n",
      [
        {
          text: "Cancel",
          onPress: () => this.resetForm(),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            this.presentLocalNotification(
              this.state.date.toLocaleDateString("en-US")
            );
            this.resetForm();
          },
        },
      ]
    );

  resetForm() {
    this.setState({
      hours: 1,
      guard: false,
      passing: false,
      back: false,
      submission: false,
      leglock: false,
      escape: false,
      date: new Date(),
      showCalendar: false,
    });
  }

  totalTraining() {
    const updatedTraining = this.state.totalTraining;
    updatedTraining.push({
      hours: this.state.hours,
      guard: this.state.guard,
      passing: this.state.passing,
      back: this.state.back,
      submission: this.state.submission,
      leglock: this.state.leglock,
      escape: this.state.escape,
    });

    this.setState({
      totalTraining: updatedTraining,
    });
  }

  getTrainingHours() {
    return this.state.totalTraining.reduce((acc, cv) => {
      return acc + Number(cv.hours);
    }, 0);
  }

  async presentLocalNotification(date) {
    function sendNotification() {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
        }),
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Your Training Log",
          body: `Enter ${date} trained`,
        },
        trigger: null,
      });
    }

    let permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) {
      permissions = await Notifications.requestPermissionsAsync();
    }
    if (permissions.granted) {
      sendNotification();
    }
  }

  render() {
    return (
      <ScrollView style={styles.Container}>
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Hours Trained Today</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.hours}
              onValueChange={(itemValue) => this.setState({ hours: itemValue })}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Training Focus</Text>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Guard / Bottom</Text>
            <Switch
              style={styles.formItem}
              value={this.state.guard}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ guard: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Passing / Top</Text>
            <Switch
              style={styles.formItem}
              value={this.state.passing}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ passing: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Back</Text>
            <Switch
              style={styles.formItem}
              value={this.state.back}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ back: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Submissions</Text>
            <Switch
              style={styles.formItem}
              value={this.state.submission}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ submission: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Leg Lock</Text>
            <Switch
              style={styles.formItem}
              value={this.state.leglock}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ leglock: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Escapes</Text>
            <Switch
              style={styles.formItem}
              value={this.state.escape}
              trackColor={{ true: "#F05454", false: null }}
              onValueChange={(value) => this.setState({ escape: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date</Text>
            <Button
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
              title={this.state.date.toLocaleDateString("en-US")}
              color="#30475E"
              accessibilityLabel="Tap me to select day trained"
            />
          </View>
          {this.state.showCalendar && (
            <DateTimePicker
              value={this.state.date}
              mode={"date"}
              display="default"
              onChange={(event, selectedDate) => {
                selectedDate &&
                  this.setState({ date: selectedDate, showCalendar: false });
              }}
              style={styles.formItem}
            />
          )}
          <View style={styles.formRow}>
            <Button
              onPress={() => {
                this.totalTraining();
                this.createAlert();
              }}
              title="Enter"
              color="#30475E"
              accessibilityLabel="Tap me to enter training information"
            />
          </View>
          <View>
            <Text>Total Hours Trained: {this.getTrainingHours()}</Text>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F5F5F5",
    paddingTop: 15,
  },
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
});

export default Training;
