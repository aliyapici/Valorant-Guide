import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    skin_name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    chroma_image: {
        height: 150,
        width: 300,
        resizeMode: 'contain'
    },
    body_container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    level_text: {
        fontSize: 15,

    },
    footer_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    video_container: {
        marginTop: 30
    },
    video: {
        width: width,
        height: 240,

    },
    no_video_text: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    no_chroma_text: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})