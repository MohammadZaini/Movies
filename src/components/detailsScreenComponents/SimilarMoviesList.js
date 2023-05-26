import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import TmdbApi from "../../api/TmdbApi";
import { push } from "../../navigationActionsRef";

const SimilarMoviesList = ({ id, routeName }) => {
    const [similarMovies, setSimilarMovies] = useState([]);

    const getSimilarMoviesById = async (id) => {
        try {
            const response = await TmdbApi.get(`/${getType()}/${id}/similar`)
            setTimeout(() => {
                setSimilarMovies(response.data.results)
            }, 1500)
        } catch (error) {
            console.log(Error(error))
        }
    };

    const getType = () => {
        if (routeName === 'Series') {
            return 'tv';
        } else {
            return 'movie';
        };
    };

    useEffect(() => {
        getSimilarMoviesById(id)
    }, []);

    return (
        <View style={styles.containter}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={similarMovies}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => push('MoviesDetails', { id: item.id })} >
                            <Image
                                style={styles.image}
                                source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containter: {
        height: 330
    },
    image: {
        height: 270,
        width: 150,
        marginHorizontal: 10,
        borderRadius: 10,
    }
});

export default SimilarMoviesList;