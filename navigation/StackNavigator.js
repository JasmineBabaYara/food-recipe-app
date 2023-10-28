import React from "react";

//importing navigation components
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing screens
import Welcome from "../screens/WelcomeScreen/Welcome";
import TabBarNavigation from "./TabBarNavigation";
import FirstRecipe from "../screens/RecipeScreen/FirstRecipe";
import SecondRecipe from "../screens/RecipeScreen/SecondRecipe";
import ThirdRecipe from "../screens/RecipeScreen/ThirdRecipe";
import FourthRecipe from "../screens/RecipeScreen/FourthRecipe";
import FifthRecipe from "../screens/RecipeScreen/FifthRecipe";

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
