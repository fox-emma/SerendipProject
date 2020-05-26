import React from "react";
import { StyleSheet, View } from "react-native";
import Instructions from "./Instructions";
import ShapeBuilder from "./ShapeBuilder";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Main extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.inner}>
          <Instructions />
          <ShapeBuilder />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04c4b4",
    padding: 20,
  },
  inner: {
    alignItems: "center",
  },
});
