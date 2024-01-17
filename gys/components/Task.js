import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
export default function Task({ children }) {
  

  return (
    <View style={styles.task}>
      <View style={styles.checkBox}>
      <AntDesign name="checkcircleo" size={24} color="black" />
      </View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flex:1,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "lightblue",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginVertical:8,
    marginHorizontal:10,
    
    
    
  },
  checkBox: {
    marginRight: 10,
  },
});
