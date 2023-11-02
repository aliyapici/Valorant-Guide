import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  image_container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  image: {
    zIndex: 2,
    width: 300,
    height: 300,
  },
  image_background: {
    position: "absolute",
    zIndex: 1,
    opacity: 0.35,
    height: 300,
    width: 300,
    tintColor: "red",
  },
  roles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  agent_role_icon: {
    height: 20,
    width: 20,
    tintColor: "black",
    marginRight: 10,
  },
  agent_name: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
    fontFamily: "Valorant-Font",
  },
  agent_role: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  agent_description: {
    fontSize: 16,
    marginVertical: 16,
    textAlign: "center",
  },
  agent_abilities_header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  agent_ability_container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  agent_ability_image: {
    width: 50,
    height: 50,
    marginRight: 12,
    tintColor: "black",
  },
  agent_ability_name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  agent_ability_key: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 12,
    borderWidth: 1,
    padding: 5,
  },
  agent_ability_description: {
    fontSize: 15,
    color: "#444",
    flex: 1,
  },
  abilities_texts: {
    flex: 1,
  },
});
