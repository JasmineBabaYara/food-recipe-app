import React, { useState } from "react";
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
import styles from "../../styles/Fifthrecipestyle";

{
  /* importing images */
}
import recipeimg from "../../assets/images/dummy_profiles/profile-pic-9.png";

{
  /* ingredients */
}
import chickensatay from "../../assets/images/recipes/chickensatay.jpg";
import rice from "../../assets/images/icons/rice.png";
import oil from "../../assets/images/icons/oil.png";
import eggs from "../../assets/images/icons/egg.png";
import tomato from "../../assets/images/icons/tomato.png";
import salt from "../../assets/images/icons/salt.png";
import pepper from "../../assets/images/icons/chilli.png";
import chicken from "../../assets/images/icons/chicken.png";
import springonions from "../../assets/images/icons/lemongrass.png";
import carrots from "../../assets/images/icons/carrots.png";
import mushrooms from "../../assets/images/icons/mushrooms.png";

import profile1 from "../../assets/images/dummy_profiles/profile-pic-3.png";
import profile2 from "../../assets/images/dummy_profiles/profile-pic-1.png";
import profile3 from "../../assets/images/dummy_profiles/profile-pic-7.png";
import profile4 from "../../assets/images/dummy_profiles/profile-pic-6.png";

export default function Other({ navigation }) {
  return (
    <ScrollView style={styles.recipecontainer}>
      {/* top background image */}
      <View style={styles.imgcontainer}>
        <ImageBackground source={chickensatay} style={styles.recipebgimg}>
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
              <Text style={styles.authortext2}>Benoist Melissa</Text>
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
            <Text style={styles.foodtext}>
              Chicken Rice {"\n"}With Satay Sauce
            </Text>
            <Text style={styles.foodtext2}>30 mins| 1 serving</Text>
          </View>
          <View style={styles.profilescontainer}>
            <Image source={profile1} style={styles.profiles} />
            <Image source={profile2} style={styles.profiles} />
            <Image source={profile3} style={styles.profiles} />
            <Image source={profile4} style={styles.profiles} />
          </View>
        </View>
        <Text style={styles.profiletext}>4 people</Text>
        <Text style={styles.profiletext2}>Already tried this!</Text>

        <View style={styles.ingredientcontainer}>
          <Text style={styles.ingretext}>Ingredients</Text>
          <Text style={styles.ingretext2}>10 items</Text>
        </View>

        {/* frist ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={chicken} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chicken</Text>
          <Text style={styles.ingredienttext2}>400g</Text>
        </View>

        {/* second ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={mushrooms} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Mushrooms</Text>
          <Text style={styles.ingredienttext2}>7 pcs</Text>
        </View>

        {/* third ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={carrots} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Carrots</Text>
          <Text style={styles.ingredienttext2}>5 pcs</Text>
        </View>

        {/* fourth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={springonions} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Spring Onions</Text>
          <Text style={styles.ingredienttext2}>3 pcs</Text>
        </View>

        {/* fifth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={pepper} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chilli</Text>
          <Text style={styles.ingredienttext2}>1/4 Tbsp</Text>
        </View>

        {/* sixth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={tomato} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Tomatoes</Text>
          <Text style={styles.ingredienttext2}>3 pcs</Text>
        </View>

        {/* seventh ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={eggs} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Eggs</Text>
          <Text style={styles.ingredienttext2}>5 pcs</Text>
        </View>

        {/* eight ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={oil} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Olive Oil</Text>
          <Text style={styles.ingredienttext2}>2 Tbsp</Text>
        </View>

        {/* ninth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={rice} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Rice</Text>
          <Text style={styles.ingredienttext2}>3 cups</Text>
        </View>

        {/* tenth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={salt} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Salt</Text>
          <Text style={styles.ingredienttext2}>1/4 Tbsp</Text>
        </View>
      </View>
    </ScrollView>
  );
}
