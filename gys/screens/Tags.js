import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubMenu from '../components/SubMenu'

export default function Tags({navigation}) {
  return (
    <View style={styles.container}>
    <View>
      <Text>Tags</Text>
    </View>
    

   
  </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "space-between", alignItems: "center" },

});