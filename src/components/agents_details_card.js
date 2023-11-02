import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../assets/styles/agents_details_card.style";

const AgentsDetailsCard = ({ agents }) => {
  const mapAbilitySlotToKey = (slot) => {
    switch (slot) {
      case "Ability1":
        return "Q";
      case "Ability2":
        return "E";
      case "Grenade":
        return "C";
      case "Ultimate":
        return "X";
      default:
        return slot;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={{ uri: agents.fullPortrait }} style={styles.image} />
          <Image
            source={{ uri: agents.background }}
            style={styles.image_background}
          />
        </View>
        <Text style={styles.agent_name}>{agents.displayName}</Text>
        <View style={styles.roles}>
          <Image
            source={{ uri: agents.role.displayIcon }}
            style={styles.agent_role_icon}
          />
          <Text style={styles.agent_role}>{agents.role.displayName}</Text>
        </View>
        <Text style={styles.agent_description}>{agents.description}</Text>
        <Text style={styles.agent_abilities_header}>Abilities:</Text>
        {agents.abilities.map((ability, index) => (
          <View key={index} style={styles.agent_ability_container}>
            <Image
              source={{ uri: ability.displayIcon }}
              style={styles.agent_ability_image}
            />
            <Text style={styles.agent_ability_key}>
              {mapAbilitySlotToKey(ability.slot)}
            </Text>
            <View style={styles.abilities_texts}>
              <Text style={styles.agent_ability_name}>
                {ability.displayName}
              </Text>
              <Text style={styles.agent_ability_description}>
                {ability.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AgentsDetailsCard;
