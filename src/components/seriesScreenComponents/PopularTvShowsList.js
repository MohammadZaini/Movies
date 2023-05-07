import React from "react";
import { StyleSheet } from "react-native";
import List from "../List";

const PopularTvShows = ({popularTvShows, screenRoute}) => {
    return (
        <List 
        data={popularTvShows} 
        header={'Popular Tv Shows'} 
        screenRoute={screenRoute}
        />
)};

const styles = StyleSheet.create({});

export default PopularTvShows;