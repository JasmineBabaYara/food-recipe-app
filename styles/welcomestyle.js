import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcomecontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  welcomeimg: {
    justifyContent: "flex-end",
    flex: 1,
  },

  welcometext: {
    display: "flex",
    position: "absolute",
    top: "45%",
    left: 20,
  },

  welcomeintro: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: "70%",
  },

  welcomesecondintro: {
    color: "#fff",
    marginTop: 20,
    width: "40%",
    fontSize: 15,
  },

  onclick: {
    //backgroundColor:'#ff8c00',
    //width:'40%',
    padding: 17,
    position: "absolute",
    bottom: "7%",
    left: 15,
    right: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff8c00",
  },

  onclicktext: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
  },
});

export default styles;
