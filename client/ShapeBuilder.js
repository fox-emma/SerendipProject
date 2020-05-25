import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
import { showShape } from "../utilityFunctions";

export default class ShapeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      x: "",
      y: "",
      sum: "",
      shape: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const sum = parseFloat(this.state.x) + parseFloat(this.state.y);
    const image = showShape(sum);
    this.setState({
      x: this.state.x,
      y: this.state.y,
      sum: sum,
      shape: image,
    });
  }

  handleRefresh() {
    this.setState({
      x: "",
      y: "",
      sum: "",
      shape: "",
    });
    console.log("after refresh: ", this.state);
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

        <Button
          title="Add"
          onPress={this.handleSubmit}
          disabled={this.state.y > 10 || this.state.x > 10}
        />

        {this.state.y > 10 || this.state.x > 10 ? (
          <Text>
            Both numbers must be greater than or equal to 0, and less than or
            equal to 10.
          </Text>
        ) : null}

        {this.state.shape.length > 2 ? (
          <View>
            <Image
              source={{ uri: this.state.shape }}
              style={{ width: 40, height: 40 }}
            />
            <Button title="Play Again" onPress={this.handleRefresh} />
          </View>
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
