import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import useFetch from "../../hooks/useFetch";
import AgentsDetailsCard from "../../components/agents_details_card";
import Config from "react-native-config";
import { API_URL } from "@env";

const AgentsDetails = ({ route }) => {
  const { agent } = route.params;
  const apiUrl = `${API_URL}/agents/${agent}?language=tr-TR`;
  const { data, loading, error } = useFetch(apiUrl);

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

  return <AgentsDetailsCard agents={data} />;
};

export default AgentsDetails;
