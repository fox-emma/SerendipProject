import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

const DisplayShape = (props) => {
  const { x, y, sum, shape, handleRefresh } = props;
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {x} + {y} = {sum}
        </Text>
        <Text style={styles.text}>{shape.name}</Text>
        <Image source={{ uri: shape.uri }} style={styles.image} />
      </View>
      <Button title="New Shape" onPress={handleRefresh} color="black" />
    </View>
  );
};

export default DisplayShape;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    width: 350,
  },
  text: {
    fontSize: 40,
  },
  image: {
    width: 150,
    height: 150,
  },
});
