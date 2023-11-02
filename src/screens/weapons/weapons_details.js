import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import WeaponsDetailsCard from "../../components/weapons_details_card";
import styles from "../../assets/styles/weapons_details_card.style";
import { API_URL } from "@env";

const WeaponsDetails = ({ route, navigation }) => {
  const { weapons } = route.params;
  const apiUrl = `${API_URL}/weapons/${weapons}`;
  const { data, loading, error } = useFetch(apiUrl);

  const handleSkinSelect = (skins) => {
    navigation.navigate("Skins", { skins });
  };

  const renderSkins = ({ item }) => {
    if (item.displayName.includes("Standard") || item.displayIcon === null) {
      return null;
    }

    return (
      <TouchableNativeFeedback onPress={() => handleSkinSelect(item.uuid)}>
        <View style={styles.skins_container}>
          <View style={styles.skins_image_container}>
            <Image
              style={styles.skins_image}
              source={{ uri: item.displayIcon }}
            />
          </View>
          <View style={styles.skins_name_container}>
            <Text style={styles.skins_name}>{item.displayName}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return <WeaponsDetailsCard weapons={data} renderSkins={renderSkins} />;
};

export default WeaponsDetails;
