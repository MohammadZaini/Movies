import React from "react";
import { StyleSheet } from "react-native";
import List from "../List";

const UpcomingMovies = ({upcomingMoviesResults}) => {
    return (
        <List data={upcomingMoviesResults} header={'Upcoming Movies'} />
    );
};

const styles = StyleSheet.create({});
export default UpcomingMovies;