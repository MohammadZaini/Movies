import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image } from 'react-native'
import TmdbApi from "../../api/TmdbApi";

const PhotoList = ({ id }) => {
    const [PersonPhotos, setPersonPhotos] = useState([]);

    useEffect(() => {
        getPersonPhotos(id)
    }, []);

    const getPersonPhotos = async id => {
        try {
            const response = await TmdbApi.get(`/person/${id}/images`)
            setPersonPhotos(response.data.profiles.reverse())
        } catch (error) {
            console.log(error)
        };
    };
    return (
        <FlatList
            horizontal
            data={PersonPhotos}
            keyExtractor={photo => photo.vote_average * Math.random()}
            renderItem={({ item }) => {
                return (
                    <Image
                        style={styles.listImages}
                        source={{ uri: `https://image.tmdb.org/t/p/original${item.file_path}` }}
                    />
                )
            }}
        />
    )
};

const styles = StyleSheet.create({
    listImages: {
        height: 200,
        width: 150,
        borderRadius: 20,
        margin: 15,
    }
});

export default PhotoList;