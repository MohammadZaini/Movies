import React from "react";
import {StyleSheet} from "react-native";
import List from "../List";

const TopRatedTvShows = ({topRatedTvShows}) => {
    return (
    <List 
    data={topRatedTvShows}  
    header={'Top Rated Tv Shows'}/>
)};

const styles = StyleSheet.create({});

export default TopRatedTvShows;