import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    elevation: 4,
    margin: 10,
  },
  gradient: {
    width: "85%",
    flex: 1,
    borderRadius: 10,
  },
  image_container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  background_image: {
    position: "absolute",
    zIndex: 1,
    opacity: 0.25,
    height: 200,
    width: 200,
  },
  text_container: {
    marginTop: 8,
  },
  body_text_container: {
    flexDirection: "row",
    paddingLeft: 10,
    marginBottom: 10,
  },
  agent_image: {
    zIndex: 2,
    width: 200,
    height: 200,
  },
  agent_name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "Valorant-Font",
  },
  agent_role_icon: {
    height: 20,
    width: 20,
  },
  agent_role: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
    paddingLeft: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
