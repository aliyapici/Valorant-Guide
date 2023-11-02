import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../assets/styles/maps_lists_card.style";

const MapsListsCard = ({ maps }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: maps.listViewIcon }} />
            <View style={styles.maps_name_container}>
                <Text style={styles.maps_name}>{maps.displayName}</Text>
            </View>
        </View>
    )
}

export default MapsListsCard;