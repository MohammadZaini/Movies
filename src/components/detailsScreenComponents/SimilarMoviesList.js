import React, {useState, useEffect} from "react";
import { View , StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import TmdbApi from "../../api/TmdbApi";
import { push } from "../../navigationActionsRef";

const SimilarMoviesList = ({id}) => {
    const [similarMovies, setSimilarMovies] = useState([]);

    const getSimilarMoviesById = async (id) => {
        try {
            const response = await TmdbApi.get(`/movie/${id}/similar`)
            setSimilarMovies(response.data.results)
        } catch(error) {
            console.log(Error(error))
        }
    };

    useEffect(() => {
        getSimilarMoviesById(id)
    },[]);
    
    return (
        <View style={styles.containter}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={similarMovies}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => push('MoviesDetails', {id : item.id})} >
                    <Image
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
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
        height:270,
        width:150,
        marginHorizontal:10,
        borderRadius: 10,
    }
});

export default SimilarMoviesList;