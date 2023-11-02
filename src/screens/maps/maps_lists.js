import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import styles from "../../assets/styles/maps_lists_card.style";
import MapsListsCard from "../../components/maps_lists_card";
import { API_URL } from "@env";
import CheckErrorAndLoading from "../../components/error_loading";

const MapsLists = () => {
  const apiUrl = `${API_URL}/maps`;
  const { data, loading, error } = useFetch(apiUrl);

  const renderMaps = ({ item }) => {
    return <MapsListsCard maps={item} />;
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
      <FlatList data={data} renderItem={renderMaps} />
    </View>
  );
};

export default MapsLists;
