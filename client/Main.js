import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Instructions from "./Instructions";
import ShapeBuilder from "./ShapeBuilder";

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Instructions /> */}
        <ShapeBuilder />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
