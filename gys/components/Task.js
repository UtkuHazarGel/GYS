import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
export default function Task({ children }) {
  

  return (
    <View style={styles.task}>
      <AntDesign name="checkcircleo" size={24} color="black" />
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    width: "90%",
    borderWidth: 1,
    height: 60,
    backgroundColor: "lightblue",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  checkBox: {
    marginRight: 10,
  },
});
