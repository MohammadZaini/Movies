import React, {useEffect, useState} from "react";
import { View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import SearchBar from "../components/searchScreenComponent/SearchBar";
import TmdbApi from "../api/TmdbApi";
import SearchedMovies from "../components/searchScreenComponent/SearchedMovies";

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
    },[]);

    return <View> 
        <SafeAreaView>
        <SearchBar 
            placeholder={'Search for movies, series or tv shows'}
            term={term}
            onTermChange={setTerm}
            onSubmit={() => getSearchedReults(term)}
            />
        <SearchedMovies searchedMoviesResults={results} />

        </SafeAreaView>
    </View>
};

SearchScreen.navigationOptions = () => {
    return {
        headerShown: false,
        tabBarIcon: ({focused}) => (
        <Feather name="search" size={24} color={focused ? 'red': 'black'} />
        )
    };
};

const styles = StyleSheet.create({});

export default SearchScreen;