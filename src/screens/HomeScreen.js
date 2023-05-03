import React from "react";
import {StyleSheet, ScrollView} from "react-native";
import TrendingPeople from "../components/homeScreenComponents/TrendingPeople";
import useTrendingMoviesResults from "../hooks/useTrendingMoviesResults";
import TrendingMovies from "../components/homeScreenComponents/TrendingMovies";
import TopMovies from "../components/homeScreenComponents/TopMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import UpcomingMovies from "../components/homeScreenComponents/UpcomingMovies";
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
                <TopMovies topMoviesResults={topRatedMovies} />
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
    };
};

export default HomeScreen;