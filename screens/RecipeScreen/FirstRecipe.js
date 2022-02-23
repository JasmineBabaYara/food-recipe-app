import React, { useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

{
  /* importing styles */
}
import styles from "../../styles/Firstrecipestyle";

{
  /* importing images */
}
import recipeimg from "../../assets/images/dummy_profiles/profile-pic-10.png";

{
  /* ingredients */
}
import spagetti from "../../assets/images/recipes/spagetti.png";
import pasta from "../../assets/images/icons/pasta.png";
import oil from "../../assets/images/icons/oil.png";
import shrimp from "../../assets/images/icons/shrimp.png";
import tomato from "../../assets/images/icons/tomato.png";
import salt from "../../assets/images/icons/salt.png";
import pepper from "../../assets/images/icons/pepper.png";
import chilli from "../../assets/images/icons/chilli.png";
import eggs from "../../assets/images/icons/egg.png";

{/* profiles import */}
import profile1 from "../../assets/images/dummy_profiles/profile-pic-3.png";
import profile2 from "../../assets/images/dummy_profiles/profile-pic-1.png";
import profile3 from "../../assets/images/dummy_profiles/profile-pic-7.png";
import profile4 from "../../assets/images/dummy_profiles/profile-pic-6.png";

export default function Other({ navigation }) {
  return (
    <ScrollView style={styles.recipecontainer}>
      {/* top background image */}
      <View style={styles.imgcontainer}>
        <ImageBackground source={spagetti} style={styles.recipebgimg}>
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
              <Text style={styles.authortext2}>Gloriana Jane</Text>
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
            <Text style={styles.foodtext}>Spaghetti With {'\n'}Shrimp Sauce</Text>
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
          <Text style={styles.ingretext2}>8 items</Text>
          </View>

        {/* frist ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={pasta} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Spaghetti Pasta</Text>
          <Text style={styles.ingredienttext2}>300g</Text>
        </View>

        {/* second ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={tomato} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Campari Tomatoes</Text>
          <Text style={styles.ingredienttext2}>50g</Text>
        </View>

        {/* third ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={shrimp} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Fresh Shrimp</Text>
          <Text style={styles.ingredienttext2}>200g</Text>
        </View>

        {/* fourth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={chilli} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Chilli Sauce</Text>
          <Text style={styles.ingredienttext2}>4 Tbsp</Text>
        </View>

        {/* fifth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={pepper} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Black Pepper</Text>
          <Text style={styles.ingredienttext2}>1/4 Tbsp</Text>
        </View>


        {/* sixth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={oil} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Olive Oil</Text>
          <Text style={styles.ingredienttext2}>2 Tbsp</Text>
        </View>

        {/* seventh ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={salt} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Salt</Text>
          <Text style={styles.ingredienttext2}>1/4 Tbsp</Text>
        </View>

        {/* eighth ingredient */}
        <View style={styles.ingredient1}>
          <View style={styles.ingredientimgcontainer}>
            <Image source={eggs} style={styles.ingredientimg} />
          </View>
          <Text style={styles.ingredienttext1}>Eggs</Text>
          <Text style={styles.ingredienttext2}>2 pcs</Text>
        </View>
        
      </View>
    </ScrollView>
  );
}
