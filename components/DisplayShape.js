import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
// import { Overlay } from "react-native-elements";

const DisplayShape = (props) => {
  const { x, y, sum, shape, handleRefresh } = props;
  return (
    // <Overlay
    //   isVisible={displayShape}
    //   // width={"75%"}
    //   // height={"75%"}
    //   animationType={"fade"}
    //   overlayBackgroundColor={"white"}
    // >
    <View>
      <Text>
        {x} + {y} = {sum}
        This is a {shape.name}. It has {sum} sides.
      </Text>
      <Image source={{ uri: shape.uri }} style={{ width: 40, height: 40 }} />
      <Button title="New Shape" onPress={handleRefresh} />
    </View>
    // </Overlay>
  );
};

export default DisplayShape;
