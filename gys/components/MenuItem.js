import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MenuItem({ children }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    marginHorizontal: 0,
    
    flex: 1,
    padding: 10,
    
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center"
  },
  menuItemText: {
    fontSize: 18,
    color:"white"
  },
});
