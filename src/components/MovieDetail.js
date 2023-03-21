import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { Entypo } from '@expo/vector-icons';
import TmdbApi from "../api/TmdbApi";
import Trailer from "./Trailer";

const MoviesDetails = ({id, trailerResults}) => {
    const [movieDetails, setMovieDetails] = useState([]);

    const getMovieDetailsById = async (id) => {
        try {
            const response =  await TmdbApi.get(`/${getId()}/${id}`)
            setMovieDetails(response.data)
        } catch(error) {
            console.log('$$movie details component$$')
            console.log(Error(error))
        };
    };
    
    const getId = () => {
        if (movieDetails.first_air_date) {
            return 'tv'
        } else {
            return 'movie'
        }
    };
console.log(movieDetails.first_air_date)
    const getGenre = () => {
        if (movieDetails.genres) {
            return movieDetails.genres.map((genre) => {
                return (  
                <View key={genre.id} >
                    <Text style={styles.text} >{genre.name}</Text>
                </View>
            )});
    } 
    };
    
    useEffect(() => {
        getMovieDetailsById(id)  
    },[]);

    return (
    <View>
        <Text style={{ color: 'grey', fontSize: 20, margin: 10, fontWeight: 'bold', marginTop: 40}}>{movieDetails.original_title}</Text>
        {/* <Trailer trailer={trailerResults} /> */}

        <Text style={{ color: 'grey', fontSize: 20, margin: 10, fontWeight: 'bold'}} >OVERVIEW</Text>

            <View style={{flexDirection: 'row'}} >
                <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}} />

                <ScrollView style={{height: 260}} >
                    <View style={{flexDirection:'row', marginBottom: 10 , flexWrap: 'wrap'}} > 
                        {getGenre()}
                    </View>
                    
                    <Text style={{marginHorizontal: 10, textAlign: 'auto', fontSize: 17, width: 210}} >{movieDetails.overview}</Text>
                    
                </ScrollView>
            </View>
        
        <View style={{flexDirection: 'row' , flexWrap: 'wrap'}}>
            <Text style={styles.text} >{<Entypo name="star" size={23} color="yellow" />}{`${movieDetails.vote_average}`.slice(0,3)}</Text>
            <Text style={styles.text} >{`${movieDetails.release_date}`.slice(0,4)}</Text>
            <Text style={styles.text} >{`Duration: ${movieDetails.runtime} m`}</Text>
            {movieDetails.budget !== 0 ? <Text style={styles.text} >Budget: {movieDetails.budget}</Text>: ''}
        </View>
    </View> 
)};

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
        padding: 3,
    },
    textBorder: {
        borderWidth: 1,
        borderColor: 'grey'
    }
});

export default MoviesDetails;