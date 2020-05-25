import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { showShape } from "../utilityFunctions";

export default class ShapeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      x: "",
      y: "",
      sum: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const sum = this.state.x + this.state.y;
    this.setState({
      sum: sum,
    });
    showShape(sum);
  }

  handleRefresh() {
    this.setState({
      x: "",
      y: "",
      sum: "",
    });
  }

  render() {
    return (
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

          <Text> = </Text>
          <View style={styles.sum}>
            <Text>{this.state.sum}</Text>
          </View>
        </View>

        <Button title="Add" onPress={this.handleSubmit} />

        <Button title="Play Again" onPress={this.handleRefresh} />
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
