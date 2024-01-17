import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Tags from "./screens/Tags";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AddTask from "./screens/AddTask";
import AddTag from "./screens/AddTag";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "gray" },
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation})=>({
          title: "Görevler",
          tabBarLabel: "Görevler",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={()=>navigation.navigate("AddTask")}>
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="black" />
              </View>
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Tag"
        component={Tags}
        options={({navigation})=>({
          title: "Etiketler",
          tabBarLabel: "Etiketler",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="tags" size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={()=>navigation.navigate("AddTag")}>
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="black" />
              </View>
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Ara",
          tabBarLabel: "Ara",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{headerTitle:"Görev Ekle"}}
        />
        <Stack.Screen
          name="AddTag"
          component={AddTag}
          options={{headerTitle:"Etiket Ekle"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  pressed:{opacity:0.5},
  iconContainer:{
    marginHorizontal:10,
    
  }
});
