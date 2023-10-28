import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

{
  /* importing styles */
}
import styles from "../../styles/Secondrecipestyles";

{
  /* importing images */
}
import recipeimg from "../../assets/images/dummy_profiles/profile-pic-9.png";

{
  /* ingredients */
}
import buffalo from "../../assets/images/recipes/buffalowings.jpg";
import chicken from "../../assets/images/icons/chicken.png";
import onion from "../../assets/images/icons/onion.png";
import oil from "../../assets/images/icons/oil.png";
import chilli from "../../assets/images/icons/chilli.png";
import garlic from "../../assets/images/icons/garlic.png";
import salt from "../../assets/images/icons/salt.png";

import profile1 from "../../assets/images/dummy_profiles/profile-pic-1.png";
import profile2 from "../../assets/images/dummy_profiles/profile-pic-2.png";
import profile3 from "../../assets/images/dummy_profiles/profile-pic-5.png";
import profile4 from "../../assets/images/dummy_profiles/profile-pic-6.png";
import profile5 from "../../assets/images/dummy_profiles/profile-pic-10.png";

export default function Other({ navigation }) {
  return (
    <View style={styles.recipecontainer}>
      {/* top background image */}
      <View style={styles.imgcontainer}>
        <ImageBackground source={buffalo} style={styles.recipebgimg}>
          <View style={styles.recipeicons}>
            <TouchableOpacity style={styles.recipeicon1}>
              <AntDesign
                name="left"
                size={20}
                color="grey"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <View>
              <FontAwesome name="bookmark" size={26} color="#ff8c00" />
            </View>
          </View>
          <View style={styles.blurview}>
            <View style={styles.blurviewimgcontainer}>
              <Image source={recipeimg} style={styles.blurviewimg} />
            </View>
            <View style={styles.recipeauthorcontainer}>
              <Text style={styles.authortext}>Recipe by: </Text>
              <Text style={styles.authortext2}>Petra Solano</Text>
            </View>
            <View style={styles.authoricon}>
              <AntDesign name="arrowright" size={20} color="grey" />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* ingredients used  */}

      <View style={styles.allingredients}>
        <View style={styles.shrimpcontainer}>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Buffalo Wings</Text>
            <Text style={styles.foodtext2}>1 hour| 5 serving</Text>
          </View>
          <View style={styles.profilescontainer}>
            <Image source={profile1} style={styles.profiles} />
            <Image source={profile2} style={styles.profiles} />
            <Image source={profile3} style={styles.profiles} />
            <Image source={profile4} style={styles.profiles} />
            <Image source={profile5} style={styles.profiles} />
          </View>
        </View>
        <Text style={styles.profiletext}>5 people</Text>
        <Text style={styles.profiletext2}>Already tried this!</Text>

        <View style={styles.ingredientcontainer}>
          <Text style={styles.ingretext}>Ingredients</Text>
          <Text style={styles.ingretext2}>7 items</Text>
        </View>

        {/* first ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={chicken} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chicken</Text>
          <Text style={styles.ingredienttext2}>300 g</Text>
        </View>

        {/* second ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={chilli} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chilli</Text>
          <Text style={styles.ingredienttext2}>2 Tbsp</Text>
        </View>

        {/* third ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={garlic} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Garlic</Text>
          <Text style={styles.ingredienttext2}>1/2 pc</Text>
        </View>

        {/* fourth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={onion} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Onion</Text>
          <Text style={styles.ingredienttext2}>1 pc</Text>
        </View>

        {/* fifth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={salt} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Salt</Text>
          <Text style={styles.ingredienttext2}>1/4 Tbsp</Text>
        </View>

        {/* sixth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={oil} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Oil</Text>
          <Text style={styles.ingredienttext2}>1 Tbsp</Text>
        </View>
      </View>
    </View>
  );
}
