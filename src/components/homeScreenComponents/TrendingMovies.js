import React from "react";
import { StyleSheet } from "react-native";;
import List from "../List";

const TrendingMovies = ({trendingMoviesResults, screenRoute}) => {
    return (
    <List 
    data={trendingMoviesResults} 
    header={'Trending Movies'} 
    screenRoute={screenRoute}
    />
)};

const styles = StyleSheet.create({});

export default TrendingMovies;