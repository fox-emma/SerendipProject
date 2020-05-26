import React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { showShape } from "../utilityFunctions";
import DisplayShape from "./DisplayShape";

export default class ShapeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      x: "",
      y: "",
      sum: "",
      shape: {},
      displayShape: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleSubmit() {
    const sum = parseFloat(this.state.x) + parseFloat(this.state.y);
    const shape = showShape(sum);
    this.setState({
      ...this.state,
      sum: sum,
      shape: shape,
      displayShape: true,
    });
  }

  handleRefresh() {
    this.setState({
      x: "",
      y: "",
      sum: "",
      shape: {},
      displayShape: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.state.y > 10 ||
          this.state.y < 0 ||
          this.state.x > 10 ||
          this.state.x < 0 ? (
            <Text style={styles.warningText}>
              <Text style={styles.bold}>Reminder!{"\n"}</Text>Both numbers must
              be between 0 and 10, inclusive.
            </Text>
          ) : null}

          {isNaN(this.state.y) || isNaN(this.state.x) ? (
            <Text style={styles.warningText}>
              <Text style={styles.bold}>Reminder!{"\n"}</Text>
              Both inputs must be numbers.{"\n"}No letters or special characters
              allowed.
            </Text>
          ) : null}

          {parseFloat(this.state.x) + parseFloat(this.state.y) < 3 ? (
            <Text style={styles.warningText}>
              <Text style={styles.bold}>Reminder!{"\n"}</Text>
              The total sum must be 3 or greater.{"\n"}
              {this.state.x} + {this.state.y} ={" "}
              {parseFloat(this.state.x) + parseFloat(this.state.y)}. Sum is too
              low.
            </Text>
          ) : null}
        </View>
        {!this.state.sum ? (
          <View>
            <View style={styles.add}>
              <TextInput
                style={styles.textInput}
                placeholder="x"
                value={this.state.x}
                onChangeText={(text) => {
                  this.setState({
                    x: text,
                  });
                }}
              />

              <Text style={styles.text}> + </Text>

              <TextInput
                style={styles.textInput}
                placeholder="y"
                value={this.state.y}
                onChangeText={(text) => {
                  this.setState({
                    y: text,
                  });
                }}
              />
            </View>
            <Button
              title="Add"
              onPress={this.handleSubmit}
              disabled={
                !this.state.y ||
                !this.state.x ||
                this.state.y > 10 ||
                this.state.y < 0 ||
                this.state.x > 10 ||
                this.state.x < 0 ||
                isNaN(this.state.y) ||
                isNaN(this.state.x) ||
                parseFloat(this.state.x) + parseFloat(this.state.y) < 3
              }
              color="black"
            />
          </View>
        ) : (
          <DisplayShape
            handleRefresh={this.handleRefresh}
            x={this.state.x}
            y={this.state.y}
            sum={this.state.sum}
            shape={this.state.shape}
            displayShape={this.state.displayShape}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff40",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    marginBottom: 45,
    width: 350,
  },
  add: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
  textInput: {
    width: 70,
    backgroundColor: "#FFFFFF",
    padding: 8,
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    borderRadius: 10,
    fontSize: 40,
  },
  warningText: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
});
