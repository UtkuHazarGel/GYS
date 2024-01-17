import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MenuItem from "../components/MenuItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SubMenu({navigation}) {
  return (
    <View style={styles.subMenu}>
      <TouchableOpacity style={styles.subMenuItem} onPress={() => navigation.navigate('Home')}>
        <View style={styles.subMenuIcon}>
          <FontAwesome5 name="tasks" size={24} color="black" />
        </View>
        <MenuItem>Gorevler</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subMenuItem} onPress={() => navigation.navigate('Tag')}>
        <View style={styles.subMenuIcon}>
          <AntDesign name="tags" size={24} color="black" />
        </View>
        <MenuItem>Etiketler</MenuItem>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subMenuItem} onPress={() => navigation.navigate('Search')}>
        <View style={styles.subMenuIcon}>
          <FontAwesome5 name="search" size={24} color="black" />
        </View>
        <MenuItem>Ara</MenuItem>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    subMenu: {
    
        backgroundColor: "gray",
    
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 70,
        width:"100%"
      },
      subMenuIcon: {
        paddingTop:10
      },
      subMenuItem: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1
      },
});
