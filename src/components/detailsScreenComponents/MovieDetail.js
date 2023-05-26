import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import TmdbApi from "../../api/TmdbApi";
import Trailer from "./Trailer";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";

const MoviesDetails = ({ id, routeName, trailerResults }) => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMovieDetailsById = async (id) => {
        try {
            const response = await TmdbApi.get(`/${getType()}/${id}`);
            setTimeout(() => {
                setMovieDetails(response.data);
                setIsLoading(true)
            }, 1500)

        } catch (error) {
            console.log('$$movie details component$$');
            console.log(Error(error));
        };
    };

    const getType = () => {
        if (routeName === 'Series') {
            return 'tv';
        } else {
            return 'movie';
        };
    };

    const getGenre = () => {
        if (movieDetails.genres) {
            return movieDetails.genres.map((genre) => {
                return (
                    <View key={genre.id} >
                        <Text style={styles.text} >{genre.name}</Text>
                    </View>
                )
            });
        };
    };

    useEffect(() => {
        getMovieDetailsById(id);
    }, []);

    if (!isLoading) {
        return <ActivityIndicator size="large" color={'red'} style={{ marginTop: 350 }} />;
    };

    return (
        <View>
            {movieDetails.original_title === undefined
                ? <Title>{movieDetails.name}</Title>
                : <Title>{movieDetails.original_title}</Title>}

            {/* <Trailer trailer={trailerResults} /> */}

            <Text style={styles.title} >OVERVIEW</Text>

            <View style={{ flexDirection: 'row' }} >

                <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.poster_path}` }} />

                <View style={{ height: 260 }} >

                    <View style={{ flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap', width: 200 }} >
                        {getGenre()}
                    </View>

                    <ScrollView style={{ width: 230 }} nestedScrollEnabled >
                        <Text style={{ marginHorizontal: 10, textAlign: 'left', fontSize: 17 }} >{movieDetails.overview}</Text>
                    </ScrollView>

                </View>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {movieDetails.vote_average === undefined
                    ? ''
                    : <Header>{<Entypo name="star" size={23} color="yellow" />}{`${movieDetails.vote_average}`.slice(0, 3)}</Header>}

                {movieDetails.release_date === undefined
                    ? ''
                    : <Header>{`${movieDetails.release_date}`.slice(0, 4)}</Header>}

                {movieDetails.budget === undefined
                    ? <Header>{`Seasons: ${movieDetails.number_of_seasons}`}</Header>
                    : <Header>{`Duration: ${movieDetails.runtime} m`}</Header>}

                {movieDetails.runtime === undefined
                    ? <Header>{`Episodes: ${movieDetails.number_of_episodes} `}</Header>
                    : <Header>{movieDetails.budget !== 0 ? <Header> Budget: {movieDetails.budget}</Header> : <Header>Budget: ---</Header>}</Header>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 150,
        margin: 10,
        borderRadius: 10
    },
    text: {
        color: 'grey',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 8,
        padding: 4,
    },
    title: {
        color: 'grey',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    }
});

const Title = styled(Text)`
    color: grey;
    fontSize: 20px;
    margin: 10px;
    fontWeight: bold;
`
const Header = styled(Text)`
    color: grey;
    fontSize: 18px;
    marginLeft: 10px;
    fontWeight: bold;
    marginTop: 10px;
    borderWidth: 2px;
    borderColor: grey;
    borderRadius: 8px;
    padding: 4px;
`
export default MoviesDetails;