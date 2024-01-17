import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


export default function MenuItem({ children }) {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:10
    
  },
  menuItemText: {
    fontSize: 16,
    color:"white"
  },
});
