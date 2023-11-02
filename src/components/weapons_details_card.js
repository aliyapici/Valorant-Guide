import React from "react";
import { View, Text, Image, TouchableNativeFeedback, FlatList, Dimensions, ScrollView } from "react-native";
import ViewSlider from 'react-native-view-slider'
import styles from "../assets/styles/weapons_details_card.style";


const WeaponsDetailsCard = ({ weapons, renderSkins }) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.default_image_container}>
                    <Image style={styles.default_image} source={{ uri: weapons.displayIcon }} />
                </View>
                <Text style={styles.weapons_name}>{weapons.displayName}</Text>
                <View>
                    <ViewSlider
                        renderSlides={
                            <>
                                <View style={styles.viewBox}>
                                    <View style={styles.slider_container}>
                                        {getDataToSliderFirst('Category', weapons.shopData?.category)}
                                        {getDataToSliderFirst('Kill Feed', undefined, weapons.killStreamIcon)}
                                    </View>

                                    <View style={styles.slider_container}>
                                        {getDataToSliderFirst('Fire Rate', weapons.weaponStats?.fireRate + ' / Sec')}

                                        {getDataToSliderFirst('Wall Damage', (weapons.weaponStats?.wallPenetration || "No Data").replace("EWallPenetrationDisplayType::", ""))}

                                    </View>

                                    <View style={styles.slider_container}>
                                        {getDataToSliderFirst('Magazine Size', weapons.weaponStats?.magazineSize)}
                                        {getDataToSliderFirst('Reload Time', weapons.weaponStats?.reloadTimeSeconds)}
                                    </View>

                                    <View style={styles.slider_container}>
                                        {getDataToSliderFirst('Price', weapons.shopData?.cost)}
                                        {getDataToSliderFirst('Reload Time', weapons.weaponStats?.reloadTimeSeconds)}
                                    </View>
                                </View>

                                <View style={styles.viewBox}>
                                    <View style={styles.slider_two_page_container}>
                                        {getDataToSliderSecond(weapons.weaponStats?.damageRanges[0]?.rangeStartMeters + ' - ' + weapons.weaponStats?.damageRanges[0]?.rangeEndMeters, weapons.weaponStats?.damageRanges[0]?.headDamage, weapons.weaponStats?.damageRanges[0]?.bodyDamage, weapons.weaponStats?.damageRanges[0]?.legDamage)}
                                        {getDataToSliderSecond(weapons.weaponStats?.damageRanges[1]?.rangeStartMeters + ' - ' + weapons.weaponStats?.damageRanges[1]?.rangeEndMeters, weapons.weaponStats?.damageRanges[1]?.headDamage, weapons.weaponStats?.damageRanges[1]?.bodyDamage, weapons.weaponStats?.damageRanges[1]?.legDamage)}
                                    </View>
                                </View>
                            </>

                        }
                        style={styles.slider}
                        height={200}
                        slideCount={2}
                        dots={true}
                        dotActiveColor='red'
                        dotInactiveColor='gray'
                        dotsContainerStyle={styles.dotContainer}
                        autoSlide={false}

                    />
                    <FlatList horizontal={true} data={weapons.skins} renderItem={renderSkins} />
                </View>
            </View>
        </ScrollView>
    )

    function getDataToSliderFirst(title, data, image) {
        if (data === null || data === undefined) {
            data = 'No Data';
        }
        return (
            <View style={styles.slider_content}>
                <View style={styles.slider_content_title_container}>
                    <Text style={styles.slider_content_title}>{title}</Text>
                </View>
                <View style={styles.slider_content_data}>
                    {image === undefined ? <Text style={styles.slider_content_text}>{data}</Text> : <Image style={{ height: 20, width: '100%', tintColor: 'black', resizeMode: 'contain' }} source={{ uri: image }} />}
                </View>
            </View>
        );
    }



    function getDataToSliderSecond(distance, headDamage, bodyDamage, legDamage) {
        return <View style={styles.human_main}>
            <View style={styles.distance_container}><Text style={styles.distance_text}>{distance}</Text></View>
            <View style={styles.human_container}>
                <Image style={styles.human_image} source={require('../assets/images/human.png')} />
            </View>
            <View style={styles.damages}>
                <View style={styles.damages_texts}>
                    <Text style={styles.damages_subtext}>HEAD</Text>
                    <Text style={styles.damages_text}>{headDamage}</Text>
                </View>
                <View style={styles.damages_texts}>
                    <Text style={styles.damages_subtext}>BODY</Text>
                    <Text style={styles.damages_text}>{bodyDamage}</Text>
                </View><View style={styles.damages_texts}>
                    <Text style={styles.damages_subtext}>LEGS</Text>
                    <Text style={styles.damages_text}>{legDamage}</Text>
                </View>
            </View>
        </View>;
    }
}

export default WeaponsDetailsCard;