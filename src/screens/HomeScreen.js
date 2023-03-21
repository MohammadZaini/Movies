import React from "react";
import {StyleSheet, ScrollView, Text } from "react-native";
import TrendingPeople from "../components/TrendingPeople";
import useTrendingMoviesResults from "../hooks/useTrendingMoviesResults";
import TrendingMovies from "../components/TrendingMovies";
import TopMovies from "../components/TopMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import useUpcomingMoviesResults from "../hooks/useUpcomingMoviesResults";
import useTrendingPeople from "../hooks/useTrendingPeople";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
    const [trendingPeople] = useTrendingPeople();
    const [trendingMoviesResults] = useTrendingMoviesResults();
    const [topRatedMovies] = useTopRatedMovies();
    const [upcomingMovies] = useUpcomingMoviesResults();

    return (
        <ScrollView>
            <SafeAreaView>
        <TopMovies top100MoviesResults={topRatedMovies} />
        <TrendingPeople results={trendingPeople} />

        <TrendingMovies trendingMoviesResults={trendingMoviesResults} />

        <UpcomingMovies upcomingMoviesResults={upcomingMovies} />
            </SafeAreaView>
        </ScrollView>
)};

const styles = StyleSheet.create({});

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default HomeScreen;