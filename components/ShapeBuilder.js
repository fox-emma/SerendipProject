import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
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

  handleSubmit(event) {
    event.preventDefault();
    const sum = parseFloat(this.state.x) + parseFloat(this.state.y);
    const shape = showShape(sum);
    this.setState({
      x: this.state.x,
      y: this.state.y,
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
      shape: "",
      displayShape: false,
    });
  }

  render() {
    return (
      <View>
        {!this.state.sum ? (
          <View>
            <View style={styles.add}>
              <TextInput
                placeholder="0"
                value={this.state.x}
                onChangeText={(text) => {
                  this.setState({
                    x: text,
                  });
                }}
              />

              <Text> + </Text>

              <TextInput
                placeholder="0"
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
                this.state.y > 10 ||
                this.state.y < 0 ||
                this.state.x > 10 ||
                this.state.x < 0 ||
                isNaN(this.state.y) ||
                isNaN(this.state.x)
              }
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

        {this.state.y > 10 ||
        this.state.y < 0 ||
        this.state.x > 10 ||
        this.state.x < 0 ? (
          <Text>
            Reminder: Both inputs must be numbers between 0 and 10, inclusive.
          </Text>
        ) : null}

        {isNaN(this.state.y) || isNaN(this.state.x) ? (
          <Text>
            Reminder: Both inputs must be numbers. No letters or special
            characters allowed.
          </Text>
        ) : null}

        {parseFloat(this.state.x) + parseFloat(this.state.y) < 3 ? (
          <Text>
            Reminder: The total sum must be 3 or greater. {this.state.x} +{" "}
            {this.state.y} ={" "}
            {parseFloat(this.state.x) + parseFloat(this.state.y)}. Sum is too
            low.
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    flexDirection: "row",
  },
  sum: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
  },
});
