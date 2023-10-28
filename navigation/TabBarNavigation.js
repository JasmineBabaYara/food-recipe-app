import React from "react";
import { View, Text } from 'react-native';

//importing navigation component
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importing vector icons
import { AntDesign, Entypo } from "expo-vector-icons";


//importing screens
import HomeScreen from "../screens/SubScreens/HomeScreen";
import SearchScreen from "../screens/SubScreens/SearchScreen";
import FavouriteScreen from "../screens/SubScreens/FavouriteScreen";

const Tab = createBottomTabNavigator();

export default function TabBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: "#ff8c00",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height:70,
          
        },
        
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} >
    
              </Entypo>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color}) => (
            <AntDesign name="search1" size={30} color={color} //color='#ff8c00' //style={{position:'absolute', bottom:'65%'}} 
            >
        
              </AntDesign>
          ),
        }}
      />

      
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={30} color={color} >
              {/* {focused&& 
              <View style={{height:5,
                width:10,
                backgroundColor:'#ff8c00',
                position:'absolute',
                left:0,
                right:0,
                bottom:0,
                borderTopLeftRadius:3,
                borderTopRightRadius:3}}></View>} */}
              </AntDesign>
          ),
        }}
      />

    
    </Tab.Navigator>
  );
}
