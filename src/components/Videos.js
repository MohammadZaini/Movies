import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe'

const Videos = ({trailerResults}) => {
    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={trailerResults}
        keyExtractor={(item, index) => item.key + index.toString()}
        renderItem={({item}) => {
            return (
                <TouchableOpacity style={{marginHorizontal: 15}} >
                    <YoutubePlayer
                    height={200}
                    width={300}
                    videoId={item.key}
                    play={false}
                />
                </TouchableOpacity>
            )
        }}
        />
    );
};

const styles = StyleSheet.create({});

export default Videos;