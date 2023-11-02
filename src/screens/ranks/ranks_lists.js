import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import RanksListsCard from "../../components/ranks_lists_card";
import { API_URL } from "@env";

const RanksLists = () => {
  const apiUrl = `${API_URL}/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1`;
  const { data, error, loading } = useFetch(apiUrl);

  const renderRanks = ({ item }) => {
    return <RanksListsCard tiers={item} />;
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
      <FlatList data={data.tiers} renderItem={renderRanks} numColumns={3} />
    </View>
  );
};

export default RanksLists;
