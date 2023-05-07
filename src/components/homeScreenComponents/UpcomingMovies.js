import React from "react";
import { StyleSheet } from "react-native";
import List from "../List";

const UpcomingMovies = ({upcomingMoviesResults, screenRoute}) => {
    return (
        <List 
        data={upcomingMoviesResults} 
        header={'Upcoming Movies'}
        screenRoute={screenRoute}
        />
    );
};

const styles = StyleSheet.create({});
export default UpcomingMovies;