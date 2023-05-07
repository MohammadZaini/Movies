import React from "react";
import {StyleSheet} from "react-native";
import List from "../List";

const OnAirTVShows = ({onAirTvShows, screenRoute}) => {
    return (
    <List 
    data={onAirTvShows} 
    header={'On Air Tv Shows'}
    screenRoute={screenRoute}
    />
)};

const styles = StyleSheet.create({});

export default OnAirTVShows;