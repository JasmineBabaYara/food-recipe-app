import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/searchscreenstyle";
import { AntDesign } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.searchcontainer}>
      <TouchableOpacity style={styles.searchicon}>
              <AntDesign
                name="left"
                size={20}
                color="grey"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>

            <View style={styles.searchtextcontainer}>
              <Text style={styles.searchtext}> Search for any recipe you need </Text>
            </View>

      <View style={styles.inputcontainer}>
              <TextInput placeholder="Search Recipes" placeholderTextColor='grey' style={styles.input} />
              <TouchableOpacity style={styles.inputicon}>
              <AntDesign name="search1" color="white" size={24} />
              </TouchableOpacity>
                
              
            </View>
    </View>
  );
}
