import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

{
  /* importing styles */
}
import styles from "../../styles/Thirdrecipestyle";

{
  /* importing images */
}
import recipeimg from "../../assets/images/dummy_profiles/profile-pic-1.png";

{
  /* ingredients */
}
import satay from "../../assets/images/recipes/satay.png";
import chicken from "../../assets/images/icons/chicken.png";
import garlic from "../../assets/images/icons/garlic.png";
import onion from "../../assets/images/icons/onion.png";
import lemongrass from "../../assets/images/icons/lemongrass.png";
import salt from "../../assets/images/icons/salt.png";
import pepper from "../../assets/images/icons/chilli.png";
import oil from "../../assets/images/icons/oil.png";

import profile1 from "../../assets/images/dummy_profiles/profile-pic-3.png";
import profile3 from "../../assets/images/dummy_profiles/profile-pic-7.png";
import profile4 from "../../assets/images/dummy_profiles/profile-pic-6.png";

export default function Other({ navigation }) {
  return (
    <ScrollView style={styles.recipecontainer}>
      {/* top background image */}
      <View style={styles.imgcontainer}>
        <ImageBackground source={satay} style={styles.recipebgimg}>
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
              <Text style={styles.authortext2}>Dylan Sprouse</Text>
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
            <Text style={styles.foodtext}>Malaysian Chicken {"\n"}Satay</Text>
            <Text style={styles.foodtext2}>50 mins| 10 serving</Text>
          </View>
          <View style={styles.profilescontainer}>
            <Image source={profile1} style={styles.profiles} />
            <Image source={profile3} style={styles.profiles} />
            <Image source={profile4} style={styles.profiles} />
          </View>
        </View>
        <Text style={styles.profiletext}>3 people</Text>
        <Text style={styles.profiletext2}>Already tried this!</Text>

        <View style={styles.ingredientcontainer}>
          <Text style={styles.ingretext}>Ingredients</Text>
          <Text style={styles.ingretext2}>7 items</Text>
        </View>

        {/* frist ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={chicken} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chicken</Text>
          <Text style={styles.ingredienttext2}>500g</Text>
        </View>

        {/* second ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={lemongrass} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Lemon Grass</Text>
          <Text style={styles.ingredienttext2}>2 Tbsp</Text>
        </View>

        {/* third ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={oil} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Olive Oil</Text>
          <Text style={styles.ingredienttext2}>2 Tbsp</Text>
        </View>

        {/* fourth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={pepper} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chilli</Text>
          <Text style={styles.ingredienttext2}>5 pcs</Text>
        </View>

        {/* fifth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={garlic} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Garlic</Text>
          <Text style={styles.ingredienttext2}>1/2 pc</Text>
        </View>

        {/* sixth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={onion} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Onion</Text>
          <Text style={styles.ingredienttext2}>1 pc</Text>
        </View>

        {/* seventh ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={salt} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Salt</Text>
          <Text style={styles.ingredienttext2}>1/2 Tbsp</Text>
        </View>
      </View>
    </ScrollView>
  );
}
