import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import { Video } from "expo-av";
import styles from "../../assets/styles/skins_style";
import { API_URL } from "@env";

const Skins = ({ route }) => {
  const { skins } = route.params;
  const apiUrl = `${API_URL}/weapons/skins/${skins}`;
  console.log(apiUrl);
  const { data, loading, error } = useFetch(apiUrl);
  const [showChroma, setShowChroma] = useState(null);
  const [showVideo, setShowVideo] = useState(null);
  const [selectedChroma, setSelectedChroma] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    if (!loading && data.chromas && data.chromas.length > 0) {
      setShowChroma(data.chromas[0].fullRender);
      setShowVideo(data.levels[0].streamedVideo);
      setSelectedChroma(data.chromas[0].fullRender);
      setSelectedLevel(data.levels[0].streamedVideo);
    }
  }, [loading, data]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignContent: "center",
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
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const selectChroma = (chroma) => {
    setShowChroma(chroma);
    setSelectedChroma(chroma);
  };

  const selectLevel = (level) => {
    setShowVideo(level);
    setSelectedLevel(level);
    console.log(level);
  };

  const editLevel = (level) => {
    const match = level.match(/Level (\d+)/);
    if (match) {
      return `Level ${match[1]}`;
    }
    return "Level 1";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.skin_name}>{data.displayName}</Text>
      <Image style={styles.chroma_image} source={{ uri: showChroma }} />

      <View style={styles.body_container}>
        {data.chromas.swatch === null ? (
          <Text style={styles.no_chroma_text}>No Chroma</Text>
        ) : (
          data.chromas.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectChroma(item.fullRender)}
              style={{
                marginHorizontal: 5,
                borderWidth: selectedChroma === item.fullRender ? 3 : 0,
                borderColor: "red",
              }}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: "contain",
                }}
                source={{ uri: item.swatch }}
              />
            </TouchableOpacity>
          ))
        )}
      </View>

      <View style={styles.footer_container}>
        {data.levels.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              selectLevel(item.streamedVideo);
            }}>
            <View
              style={{
                backgroundColor:
                  selectedLevel === item.streamedVideo ? "#d18b86" : "gray",
                justifyContent: "space-between",
                alignContent: "center",
                marginHorizontal: 5,
                padding: 10,
                borderRadius: 15,
              }}>
              <Text style={styles.level_text}>
                {editLevel(item.displayName)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.video_container}>
        {showVideo ? (
          <Video
            source={{ uri: showVideo }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay={true}
            resizeMode="contain"
            useNativeControls={true}
            style={styles.video}
          />
        ) : (
          <Text style={styles.no_video_text}>No Video</Text>
        )}
      </View>
    </View>
  );
};

export default Skins;
