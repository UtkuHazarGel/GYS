import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Task from "../components/Task";
import MenuItem from "../components/MenuItem";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <Task>Bu bir görevdir!</Task>
      <View style={styles.subMenu}>
        <MenuItem>
        <View><Text>buraya ikonlar gelecek</Text></View>
        Gorevler</MenuItem>
        <MenuItem>Etiketler</MenuItem>
        <MenuItem>Ara</MenuItem>
        <MenuItem>Araaraar</MenuItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  subMenu: {
    backgroundColor: "gray",
    
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection:"row",
    marginTop:10,
    height:70
  },
});
