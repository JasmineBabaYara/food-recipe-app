import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  recipecontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    //marginTop:'10%',
    //justifyContent:'space-between'
  },

  imgcontainer: {
    width: "100%",
    height: 320,
  },

  recipebgimg: {
    width: "100%",
    height: 320,
  },

  recipeicons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 27,
  },

  recipeicon1: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "grey",
    width: 25,
  },

  blurview: {
    flexDirection: "row",
    backgroundColor: " rgba(0, 0, 0, 0.6)",
    position: "absolute",
    bottom: 10,
    left: 15,
    right: 15,
    height: 80,
    //justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
  },

  blurviewimgcontainer: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },

  blurviewimg: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },

  recipeauthorcontainer: {
    marginLeft: 15,
  },

  authortext: {
    color: "grey",
  },

  authortext2: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 2,
  },

  authoricon: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "grey",
    width: 25,
    marginLeft: 180,
  },

  allingredients: {
    justifyContent: "space-evenly",
    marginLeft: 30,
    marginTop: 15,
  },

  shrimpcontainer: {
    flexDirection: "row",
  },

  foodtextcontainer: {
    flex: 1,
    marginTop: 10,
  },

  foodtext: {
    fontSize: 20,
    fontWeight: "bold",
  },

  foodtext2: {
    color: "grey",
    marginTop: 7,
  },

  profilescontainer: {
    width: 50,
    height: 50,
    flexDirection: "row",
    marginRight: 100,
  },

  profiles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: -20,
  },

  profiletext: {
    color: "grey",
    alignSelf: "flex-end",
    marginTop: -17,
    marginRight: 20,
  },

  profiletext2: {
    color: "grey",
    marginTop: 3,
    alignSelf: "flex-end",
    marginRight: 20,
  },

  ingredientcontainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 10,
  },

  ingretext: {
    fontSize: 17,
    fontWeight: "bold",
  },

  ingretext2: {
    color: "grey",
    marginRight: 30,
  },

  ingredient1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-between",
  },

  ingredientimgcontainer: {
    width: 40,
    height: 40,
  },

  ingredientimg: {
    width: 40,
    height: 40,
  },

  ingredienttext1: {
    marginRight: 80,
    fontSize: 15,
    //alignSelf:'flex-start',
    textAlign: "left",
  },
  ingredienttext2: {
    marginRight: 35,
  },
});

export default styles;
