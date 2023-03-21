import React from "react";
import { StyleSheet } from "react-native";;
import List from "./List";

const TrendingMovies = ({trendingMoviesResults}) => {
    return (
    <List data={trendingMoviesResults} header={'Trending Movies'} />
)};

const styles = StyleSheet.create({});

export default TrendingMovies;