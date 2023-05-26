import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import TmdbApi from "../api/TmdbApi";
import SearchedMovies from "../components/searchScreenComponent/SearchedMovies";
import { Searchbar } from "react-native-paper";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('')

    const getSearchedReults = async (searchTerm) => {
        try {
            const response = await TmdbApi.get(`/search/multi?query=${searchTerm}`)
            setResults(response.data.results)
            console.log(response.data.results.json())

        } catch (err) {
            console.log('Search Screen')
            console.log(Error(err))
        }
    };

    useEffect(() => {
        getSearchedReults('wa');
    }, []);

    return <View>
        <SafeAreaView>
            <Searchbar
                value={term}
                onChangeText={setTerm}
                onEndEditing={() => getSearchedReults(term)}
                placeholder="Seach for a movie or tv show "
                style={styles.searchBar}
            />
            <SearchedMovies searchedMoviesResults={results} />

        </SafeAreaView>
    </View>
};

SearchScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
        borderRadius: 50
    }
});

export default SearchScreen;