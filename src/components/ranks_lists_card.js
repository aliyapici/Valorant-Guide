import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../assets/styles/ranks_lists_card.style";

const RanksListsCard = ({ tiers }) => {
    const backgroundColors = `#${tiers.color}`;

    return (
        <View style={[styles.container, style = { backgroundColor: backgroundColors }]}>
            {tiers.tier > 2 ? <Image style={styles.image} source={{ uri: tiers.largeIcon }} /> : null}
            {tiers.tier > 2 ? <Text style={styles.ranks_name}>{tiers.tierName}</Text> : null}
        </View>
    )
}

export default RanksListsCard;
