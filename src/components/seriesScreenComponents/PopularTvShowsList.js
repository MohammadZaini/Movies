import React from "react";
import { StyleSheet } from "react-native";
import List from "../List";

const PopularTvShows = ({popularTvShows}) => {
    return (
        <List data={popularTvShows} header={'Popular Tv Shows'} />
)};

const styles = StyleSheet.create({});

export default PopularTvShows;