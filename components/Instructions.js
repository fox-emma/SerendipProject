import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Instructions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.header}>Hello!</Text>
        <Text style={{ fontSize: 20 }}>
          {"\n"}
          Are you ready to build some shapes?
          {"\n"}
          {"\n"}
        </Text>
        <Text style={{ fontSize: 16 }}>
          To build a shape, you will first enter two numbers, x and y, in the
          spaces below. We will calculate the sum of the two numbers, n, and
          display a shape with n sides.
          {"\n"}
        </Text>
        {"\n"}
        <Text style={{ fontSize: 20 }}>Rules</Text>
        {"\n"}
        <Text style={{ textAlign: "left", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>1.</Text> Inputs must be numbers
          only.
          {"\n"}
          <Text style={{ fontWeight: "bold" }}>2.</Text> Both numbers must be
          greater than or equal to 0, and less than or equal to 10.
          {"\n"}
          <Text style={{ fontWeight: "bold" }}>3.</Text> The total sum must be
          at least 3. (For this purpose, we have defined 'shape' as a figure
          having at least 3 sides.)
          {"\n"}
          {"\n"}
        </Text>
        <Text style={{ fontSize: 20 }}>Let's get started!</Text>
      </Text>
    </View>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff40",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    marginTop: 45,
    width: 350,
  },
  text: {
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 40,
    fontWeight: "700",
  },
});
