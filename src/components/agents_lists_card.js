import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/styles/agents_lists_card.style";

const AgentsListsCard = ({ agents, onSelect }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  function addHashToColors(colors) {
    return colors.map((color) => `#${color}`);
  }

  const apiColors = agents.backgroundGradientColors;
  const colorsWithHash = addHashToColors(apiColors);

  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <LinearGradient
          colors={colorsWithHash}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}>
          <View style={styles.image_container}>
            {imageLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="white" />
              </View>
            )}
            <Image
              source={{ uri: agents.fullPortrait }}
              style={[styles.agent_image, styles.overlayImage]}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <Image
              source={{ uri: agents.background }}
              style={styles.background_image}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.agent_name}>{agents.displayName}</Text>
            <View style={styles.body_text_container}>
              <Image
                style={styles.agent_role_icon}
                source={{ uri: agents.role.displayIcon }}
              />
              <Text style={styles.agent_role}>{agents.role.displayName}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableNativeFeedback>
  );
};

export default AgentsListsCard;
