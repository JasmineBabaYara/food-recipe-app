import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchcontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: 30,
  },
  searchicon: {
    borderWidth: 2,
    borderRadius: 50,
    width: 25,
    marginLeft: 15,
    borderColor: "grey",
  },
  searchtextcontainer: {
    padding: 10,
    alignItems: "center",
  },
  searchtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "grey",
  },
  inputcontainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 17,
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "space-between",
  },
  input: {
    // width:'85%',
    height: 50,
    borderWidth: 2,
    borderColor: "#ff8c00",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  inputicon: {
    flex: 1,
    backgroundColor: "#ff8c00",
    height: 50,
    alignItems: "center",
    padding: 13,
    borderWidth: 2,
    borderColor: "#ff8c00",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default styles;
