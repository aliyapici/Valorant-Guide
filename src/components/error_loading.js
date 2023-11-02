import React from "react";
import { View, Text } from "react-native";

const LoadingErrorView = ({ loading, error }) => {
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>Loading...</Text>
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

  return null;
};

export default LoadingErrorView;
