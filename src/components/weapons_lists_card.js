import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "../assets/styles/weapons_lists_card.style";

const WeaponsListsCard = ({ weapons, onSelect }) => {
    return (
        <TouchableNativeFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.weapons_image} source={{ uri: weapons.displayIcon }} />
                <View>
                    <Text style={styles.weapons_name}>{weapons.displayName}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default WeaponsListsCard;