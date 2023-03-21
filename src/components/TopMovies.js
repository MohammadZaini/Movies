import React  from "react";
import {StyleSheet} from "react-native";
import List from "./List";

const Top100Movies = ({top100MoviesResults}) => {
    return (
        <List data={top100MoviesResults} header={'Top Movies'} />
)};

const styles = StyleSheet.create({});

export default Top100Movies;