import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function FavouriteScreen({ navigation }) {
  return (
    <View >
      <TouchableOpacity >
              <AntDesign
                name="left"
                size={20}
                color="grey"
                onPress={() => navigation.goBack()}
              />
              
      </TouchableOpacity>
    </View>
  );
}
