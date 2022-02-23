import React from "react";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
//import { ImageBackground } from "react-native-web";
import welcome from "../../assets/images/t.jpg";
import styles from '../../styles/welcomestyle';


export default function Welcome({ navigation }) {
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 3000,
  //     //useNativeDriver: true,
  //   }).start();
  // };

  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground source={welcome} style={styles.welcomeimg} resizeMode="cover">
        <View style={styles.welcometext}>
          <Text style={styles.welcomeintro}>
             Experience Cooking like a chef
          </Text>
          <Text style={styles.welcomesecondintro}>
            Discover more than 1200 food recipes in your hands and cooking it easily.
          </Text>
        </View>
        {/* <Animated.View > */}
        <TouchableOpacity style={styles.onclick} onPress={()=> navigation.navigate("TabBarNavigation", { screen: "HomeScreen" })}>
          <Text style={styles.onclicktext}>
            Get Started
          </Text>
        </TouchableOpacity>
        {/* </Animated.View>
        <Text onPress={fadeOut}>Hello</Text> */}
      </ImageBackground>
    </View>
  );
}



