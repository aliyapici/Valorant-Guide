import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    weapons_name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    slider_container: {
        flexDirection: 'row',
        flex: 1,
    },
    slider_content: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 10,

    },
    slider_content_title_container: {
        backgroundColor: '#d18b86',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    slider_content_title: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
    },
    slider_content_data: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    slider_content_text: {
        fontSize: 18,
        fontStyle: 'italic',
        flex: 1,
    },
    default_image_container: {
        flex: 1,
        padding: 10,
    },
    default_image: {
        height: 100,
        width: '100%'
    },
    slider_two_page_container: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    human_main: {
        flex: 1,
        flexDirection: 'row',

    },
    distance_container: {
        position: 'absolute',
        backgroundColor: '#d9cfce',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 60,
        borderRadius: 25,
        zIndex: 1,
        padding: 3,
        flex: 1,
    },
    distance_text: {
        fontWeight: 'bold',
    },
    human_container: {
        marginLeft: -20,
    },
    human_image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        tintColor: 'gray'
    },
    damages: {
        marginLeft: -50,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    damages_texts: {
    },
    damages_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    damages_subtext: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    viewBox: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        height: 350,
        width: width,
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        height: 390
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 5
    },
    skins_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        margin: 5,
    },
    skins_image_container: {

    },
    skins_image: {
        height: 100,
        width: 150,
        resizeMode: 'contain',
    },
    skins_name_container: {
        flex: 1,
        backgroundColor: '#d18b86',
        flexDirection: 'row',
    },
    skins_name: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },

});