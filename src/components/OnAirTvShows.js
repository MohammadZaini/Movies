import React from "react";
import {StyleSheet} from "react-native";
import List from "./List";

const OnAirTVShows = ({onAirTvShows}) => {
    return (
    <List data={onAirTvShows} header={'On Air Tv Shows'} />
)};

const styles = StyleSheet.create({});

export default OnAirTVShows;