import React from "react";
import { Text, View } from "react-native";

export default class Instructions extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>
          Hello! Are you ready to build some shapes? To build shapes you will
          need to enter two numbers that are both between 0 and 10. We will add
          those numbers together and display a shape that has the amount of
          sides equal to the sum of the numbers. Ready to play? Yes!
        </Text>
      </View>
    );
  }
}
