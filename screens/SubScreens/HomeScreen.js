import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import styles from "../../styles/homescreenstyle";
import spagetti from "../../assets/images/recipes/spagetti.png";
import buffalo from "../../assets/images/recipes/buffalowings.jpg";
import chickensatay from "../../assets/images/recipes/chickensatay.jpg";
import satay from "../../assets/images/recipes/satay.png";
import meatballs from "../../assets/images/recipes/meatballs.jpg";
import recipe from "../../assets/images/recipes/recipe.png";
//import { withNavigation } from "react-navigation";

export default function Hom({ navigation }) {
  const sliderWidth = Dimensions.get("window").width;
  let carousel;
  const [activeNumber, setActiveNumber] = useState(0);
  const [carouselList, setCarouselList] = useState([
    {
      image: spagetti,
      title: "Pasta",
      content: "Spagetti With Shrimp Sauce",
      text: "30 min| 1 serving",
    },
    {
      image: buffalo,
      title: "Local",
      content: "Buffalo Wings",
      text: "1 hour| 5 serving",
    },
    {
      image: chickensatay,
      title: "Continental",
      content: "Chicken Rice With Satay Sauce",
      text: "40 mins| 4 serving",
    },
    {
      image: meatballs,
      title: "Local",
      content: "Spagetti With MeatBalls",
      text: "1 hour| 10 serving",
    },
    {
      image: satay,
      title: "Chinese",
      content: "Malaysian Chicken Satay",
      text: "50 min| 10 serving",
    },
  ]);
  return (
    <ScrollView style={styles.homecontainer}>
      <View style={styles.homefirstsection}>
        <View style={styles.homeintro}>
          <Text style={styles.homeintrotext}>Hello Name,</Text>
          <Text style={styles.homeintrotext2}>
            What do you want to cook today?
          </Text>
        </View>

        <View style={styles.seerecipescontainer}>
          <View style={styles.recipeimgcontainer}>
            <Image source={recipe} style={styles.recipeimg} />
          </View>
          <View style={styles.seerecipetextcontainer}>
            <Text style={styles.seerecipetext}>
              You have 12 recipes that you haven't tried yet
            </Text>
            <TouchableOpacity>
              <Text style={styles.seerecipetext2}> See Recipes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.trendingrecipe}>Trending Recipes</Text>
          <Carousel
            layout={"default"}
            ref={(ref) => (carousel = ref)}
            data={carouselList}
            sliderWidth={sliderWidth}
            sliderHeight={40}
            itemWidth={380}
            renderItem={renderItems}
            onSnapToItem={(index) => setActiveNumber(index)}
          />
        </View>
      </View>

      <View style={styles.categorycontainer}>
        <Text style={styles.categorytext}>Categories</Text>
        <Text style={styles.categorytext2}> View All</Text>
      </View>

      <View style={styles.foodcategorymain}>
        {/* beginning of first food category */}
        <TouchableOpacity
          style={styles.foodcategory}
          onPress={() =>
            navigation.navigate("FirstRecipe", { screen: "FirstRecipe" })
          }
        >
          <View style={styles.foodimgcontainer}>
            <Image source={spagetti} style={styles.foodimg} />
          </View>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Spaghetti With Shrimp Sauce</Text>
            <Text style={styles.foodtext2}>30 mins| 1 serving</Text>
          </View>
        </TouchableOpacity>

        {/* beginning of second food category */}
        <TouchableOpacity
          style={styles.foodcategory}
          onPress={() =>
            navigation.navigate("SecondRecipe", { screen: "SecondRecipe" })
          }
        >
          <View style={styles.foodimgcontainer}>
            <Image source={buffalo} style={styles.foodimg} />
          </View>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Buffalo Wings</Text>
            <Text style={styles.foodtext2}>1hour| 5 serving</Text>
          </View>
        </TouchableOpacity>

        {/* beginning of third food category */}
        <TouchableOpacity
          style={styles.foodcategory}
          onPress={() =>
            navigation.navigate("FifthRecipe", { screen: "FifthRecipe" })
          }
        >
          <View style={styles.foodimgcontainer}>
            <Image source={chickensatay} style={styles.foodimg} />
          </View>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Chicken Rice With Satay Sauce</Text>
            <Text style={styles.foodtext2}>40 mins| 4 serving</Text>
          </View>
        </TouchableOpacity>

        {/* beginning of fourth food category */}
        <TouchableOpacity
          style={styles.foodcategory}
          onPress={() =>
            navigation.navigate("FourthRecipe", { screen: "FourthRecipe" })
          }
        >
          <View style={styles.foodimgcontainer}>
            <Image source={meatballs} style={styles.foodimg} />
          </View>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Spagetti With Meat Balls</Text>
            <Text style={styles.foodtext2}>1 hour| 10 serving</Text>
          </View>
        </TouchableOpacity>

        {/* beginning of fourth food category */}
        <TouchableOpacity
          style={styles.foodcategory}
          onPress={() =>
            navigation.navigate("ThirdRecipe", { screen: "ThirdRecipe" })
          }
        >
          <View style={styles.foodimgcontainer}>
            <Image source={satay} style={styles.foodimg} />
          </View>
          <View style={styles.foodtextcontainer}>
            <Text style={styles.foodtext}>Malaysian Chicken Satay</Text>
            <Text style={styles.foodtext2}>50 mins| 10 serving</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

{
  /* rendering carousel */
}
const renderItems = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        width: 350,
        height: 400,
        borderRadius: 30,
        marginTop: 10,
        //marginVertical: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={{ width: 350, height: 400, borderRadius: 30 }}
      >
        <View
          style={{
            position: "absolute",
            top: 20,
            left: 15,
            paddingVertical: 5,
            paddingHorizontal: 20,
            backgroundColor: " rgba(128, 128, 128, 0.6)",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            {item.title}
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            right: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: " rgba(0, 0, 0, 0.6)",
            borderRadius: 10,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
                width: "70%",
              }}
            >
              {item.content}
            </Text>
            <Text style={{ color: "grey", position: "absolute", bottom: 2 }}>
              {item.text}
            </Text>
          </View>
          <View>
            <FontAwesome name="bookmark-o" size={24} color="#ff8c00" />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
