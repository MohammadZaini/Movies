import React from "react";
import {StyleSheet, ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';
import useResults from "../hooks/useResults";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularTvShows from "../components/seriesScreenComponents/PopularTvShowsList";
import TopRatedTvShows from "../components/seriesScreenComponents/TopRatedTvShows";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import OnAirTVShows from "../components/seriesScreenComponents/OnAirTvShows";
import useOnAirTvShows from "../hooks/useOnAirTvShows";

const SeriesScreen = ({navigation}) => {
    const [popularTvShows] = useResults();
    const [topRatedTvShows] = useTopRatedTvShows();
    const [onAirTvShows] = useOnAirTvShows();
    
    return (
        <ScrollView>
            <SafeAreaView>
                <OnAirTVShows 
                onAirTvShows={onAirTvShows}
                screenRoute={navigation.state.routeName}
                />
                <TopRatedTvShows 
                topRatedTvShows={topRatedTvShows} 
                screenRoute={navigation.state.routeName}
                />
                <PopularTvShows 
                popularTvShows={popularTvShows}
                screenRoute={navigation.state.routeName}
                />
            </SafeAreaView>
        </ScrollView>
)};

const styles = StyleSheet.create({});

SeriesScreen.navigationOptions = () => {
    return {
        headerShown: false,
        tabBarIcon: ({focused}) => (
        <Feather name="tv" size={24} color={focused ? 'red': 'black'} />
        )
    };
};

export default SeriesScreen;