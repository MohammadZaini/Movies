import React, {useState, useEffect} from "react";
import { Text, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import MoviesDetails from "../components/detailsScreenComponents/MovieDetail";
import TmdbApi from "../api/TmdbApi";
import CastList from "../components/detailsScreenComponents/CastList";
import CrewList from "../components/detailsScreenComponents/CrewList";
import SimilarMoviesList from "../components/detailsScreenComponents/SimilarMoviesList";
import Videos from "../components/Videos";
import MovieReviews from "../components/detailsScreenComponents/MovieReviews";
import { SafeAreaView } from "react-native-safe-area-context";

const MoviesDetailsScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const screenRoute = navigation.getParam('screenRoute')

    const [trailer, setTrailer] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getTrailerById = async id => {
        try { 
            const response = await TmdbApi.get(`/${getType()}/${id}/videos`);
            setIsLoaded(true);
            setTrailer(response.data.results);
        } catch(error) {
            console.log(Error(error))
        };
    };

    useEffect(() => {
        getTrailerById(id)    
    },[]);

    const getType = () => {
        if(screenRoute === 'Series') {
            return 'tv';
        } else {
            return 'movie';
        };
    };

    if(!isLoaded) {
        return <ActivityIndicator size={"large"} color={'red'}/>;
    };

    return (
    <ScrollView style={{ flex: 1}} >
        <SafeAreaView>
            <MoviesDetails 
            id={id}
            trailerResults={trailer}
            routeName={screenRoute}
            />

            <Text style={styles.header} >Cast</Text>
            <CastList 
            id={id}
            />

            <Text style={styles.header} >Crew</Text>
            <CrewList 
            id={id} /> 

            <Text style={styles.header}>Videos</Text>
            <Videos  trailerResults={trailer}  />

            <Text style={styles.header} >Similar Movies</Text>
            <SimilarMoviesList  
            id={id} />

            <Text style={styles.header} >Reviews</Text>
            <MovieReviews id={id} />
        </SafeAreaView>
    </ScrollView>
    );
};

MoviesDetailsScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    header: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 12
    }
});

export default MoviesDetailsScreen;