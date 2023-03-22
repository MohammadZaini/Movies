import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { navigate } from "../../navigationActionsRef";

const SearchedMovies = ({searchedMoviesResults}) => {

    return (
    <View>
        <FlatList
        numColumns={2}
        data={searchedMoviesResults}
        keyExtractor={(movie) => movie.id}
        renderItem={({item})=> {
            return (
                    <TouchableOpacity onPress={() => navigate('MoviesDetails', {id: item.id})} >
                        <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}} />
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
            )}}      
        />
    </View>
)};

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 150,
        marginRight: 30,
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 25,
        marginTop: 10
    }, 
    text : {
        textAlign: 'center',
        fontSize: 18,
        width: 150,
        fontWeight: 'bold',
        marginLeft: 20
    }
});

export default SearchedMovies;