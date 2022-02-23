import React from "react";

//importing navigation components
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing screens
import Welcome from "../screeens/WelcomeScreen/Welcome";
import TabBarNavigation from "./TabBarNavigation";
import FirstRecipe from "../screeens/RecipeScreen/FirstRecipe";
import SecondRecipe from "../screeens/RecipeScreen/SecondRecipe";
import ThirdRecipe from "../screeens/RecipeScreen/ThirdRecipe";
import FourthRecipe from "../screeens/RecipeScreen/FourthRecipe";
import FifthRecipe from "../screeens/RecipeScreen/FifthRecipe";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Welcome}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="TabBarNavigation" component={TabBarNavigation} />
      <Stack.Screen name="FirstRecipe" component={FirstRecipe}  />
      <Stack.Screen name="SecondRecipe" component={SecondRecipe}  />
      <Stack.Screen name="ThirdRecipe" component={ThirdRecipe}  />
      <Stack.Screen name="FourthRecipe" component={FourthRecipe}  />
      <Stack.Screen name="FifthRecipe" component={FifthRecipe}  />
    </Stack.Navigator>
  );
}
