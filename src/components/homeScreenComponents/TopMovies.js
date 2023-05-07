import React  from "react";
import {StyleSheet} from "react-native";
import List from "../List";

const TopMovies = ({topMoviesResults, screenRoute}) => {
    return (
        <List 
        data={topMoviesResults} 
        header={'Top Movies'} 
        screenRoute={screenRoute}
        />
)};

const styles = StyleSheet.create({});

export default TopMovies;