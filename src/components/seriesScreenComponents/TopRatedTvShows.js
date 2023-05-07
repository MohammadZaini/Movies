import React from "react";
import {StyleSheet} from "react-native";
import List from "../List";

const TopRatedTvShows = ({topRatedTvShows, screenRoute}) => {
    // console.log(screenRoute)
    return (
    <List 
    data={topRatedTvShows}  
    header={'Top Rated Tv Shows'}
    screenRoute={screenRoute}
    />
)};

const styles = StyleSheet.create({});

export default TopRatedTvShows;