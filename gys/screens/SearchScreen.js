import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SubMenu from "../components/SubMenu";

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Search</Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between", alignItems: "center" },
});
