import React from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import WeaponsListsCard from "../../components/weapons_lists_card";
import { API_URL } from "@env";

const WeaponsLists = ({ navigation }) => {
  const apiUrl = `${API_URL}/weapons`;
  const { data, error, loading } = useFetch(apiUrl);

  const handleWeaponSelect = (weapons) => {
    navigation.navigate("WeaponsDetails", { weapons });
  };

  const renderWeapons = ({ item }) => {
    return (
      <WeaponsListsCard
        weapons={item}
        onSelect={() => handleWeaponSelect(item.uuid)}
      />
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

  return (
    <View>
      <FlatList data={data} renderItem={renderWeapons} />
    </View>
  );
};

export default WeaponsLists;
