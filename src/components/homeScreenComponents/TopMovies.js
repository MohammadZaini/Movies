import React  from "react";
import {StyleSheet} from "react-native";
import List from "../List";

const TopMovies = ({topMoviesResults}) => {
    return (
        <List data={topMoviesResults} header={'Top Movies'} />
)};

const styles = StyleSheet.create({});

export default TopMovies;