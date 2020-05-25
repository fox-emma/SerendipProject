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
          Hello! Are you ready to build some shapes? To build a shape you will
          enter two numbers, we will find the sum of the two numbers and display
          a shape which has the amount of sides equal to the sum of the two
          numbers. Rules: 1. You must enter two numbers, no letters or special
          characters. 2. Both numbers must be greater than or equal to 0, and
          less than or equal to 10. 3. The total sum must be at least 3. (For
          this purpose, we have defined 'shape' as a figure having at least
          three sides.) Ready to play? Great!
        </Text>
      </View>
    );
  }
}
