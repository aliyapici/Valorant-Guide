import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import AgentsListsCard from "../../components/agents_lists_card";
import Config from "react-native-config";
import { API_URL } from "@env";

const AgentsScreen = ({ navigation }) => {
  const apiUrl = `${API_URL}/agents?language=tr-TR&isPlayableCharacter=true`;
  console.log(apiUrl);
  const { error, loading, data } = useFetch(apiUrl);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedRole, setSelectedRole] = useState("ALL");

  useEffect(() => {
    if (!loading && data) {
      filterAgentsByRole("Hepsi");
    }
  }, [data, loading]);

  const filterAgentsByRole = (role) => {
    if (role === "Hepsi") {
      setFilteredData(data);
    } else {
      const filteredAgents = data.filter(
        (agent) => agent.role.displayName === role
      );
      setFilteredData(filteredAgents);
    }
    setSelectedRole(role);
  };

  const handleAgentSelect = (agent) => {
    navigation.navigate("AgentsDetails", { agent });
  };

  const renderAgents = ({ item }) => (
    <View>
      <AgentsListsCard
        agents={item}
        onSelect={() => handleAgentSelect(item.uuid)}
      />
    </View>
  );

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
    <SafeAreaView style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 10,
        }}>
        {/* "Hepsi", "Öncü", "Düellocu", "Kontrol Uzmanı", "Gözcü" */}
        {/* "ALL", "Initiator", "Duelist", "Controller", "Sentinel" */}
        {["Hepsi", "Öncü", "Düellocu", "Kontrol Uzmanı", "Gözcü"].map(
          (role) => (
            <TouchableOpacity
              key={role}
              onPress={() => filterAgentsByRole(role)}
              style={{
                padding: 10,
                backgroundColor:
                  selectedRole === role ? "#d18b86" : "transparent",
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: selectedRole === role ? "white" : "black",
                  fontWeight: selectedRole === role ? "bold" : "normal",
                }}>
                {role}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={filteredData}
        renderItem={renderAgents}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default AgentsScreen;
