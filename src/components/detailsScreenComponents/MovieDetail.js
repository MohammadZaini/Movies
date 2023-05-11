import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { Entypo } from '@expo/vector-icons';
import TmdbApi from "../../api/TmdbApi";
import Trailer from "./Trailer";

const MoviesDetails = ({id, routeName, trailerResults}) => {
    const [movieDetails, setMovieDetails] = useState([]);

    const getMovieDetailsById = async (id) => {
        try {
            const response =  await TmdbApi.get(`/${getType()}/${id}`);
            setMovieDetails(response.data);
        } catch(error) {
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
console.log(movieDetails)
    const getGenre = () => {
        if (movieDetails.genres) {
            return movieDetails.genres.map((genre) => {
                return (  
                <View key={genre.id} >
                    <Text style={styles.text} >{genre.name}</Text>
                </View>
            )});
        };
    };
    
    useEffect(() => {
        getMovieDetailsById(id);
    },[]);
    
    return (
    <View>
        {movieDetails.original_title === undefined 
        ? <Text style={styles.title}>{movieDetails.name}</Text>
        : <Text style={styles.title}>{movieDetails.original_title}</Text>}

        {/* <Trailer trailer={trailerResults} /> */}
        {trailerResults === undefined ? <Trailer trailer={trailerResults} /> : ''}
        {console.log(trailerResults)}

        <Text style={styles.title} >OVERVIEW</Text>

            <View style={{flexDirection: 'row'}} >
                
                <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}} />
                

                <View style={{height: 260}} >

                    <View style={{flexDirection:'row', marginBottom: 10 , flexWrap: 'wrap', width: 200}} > 
                        {getGenre()}
                    </View>
        
                    <ScrollView style={{height: 300, flexDirection: 'column'}} >
                        <View style={{width: 230}} >
                            <Text style={{marginHorizontal: 10, textAlign: 'left', fontSize: 17, flex: 1}} >{movieDetails.overview}</Text>
                        </View>
                    </ScrollView>
                    

                </View>
            </View>
        
        <View style={{flexDirection: 'row' , flexWrap: 'wrap'}}>
            {movieDetails.vote_average === undefined 
            ? '' 
            : <Text style={styles.text} >{<Entypo name="star" size={23} color="yellow" />}{`${movieDetails.vote_average}`.slice(0,3)}</Text>}
            
            {movieDetails.release_date === undefined 
            ? '' 
            : <Text style={styles.text} >{`${movieDetails.release_date}`.slice(0,4)}</Text>}

            {movieDetails.budget === undefined 
            ? <Text style={styles.text} >{`Seasons: ${movieDetails.number_of_seasons} `}</Text> 
            : <Text style={styles.text} >{`Duration: ${movieDetails.runtime} m`}</Text>}

            {movieDetails.runtime === undefined 
            ? <Text style={styles.text} >{`Episodes: ${movieDetails.number_of_episodes} `}</Text> 
            : <Text style={styles.text}>{movieDetails.budget !== 0 ? <Text style={styles.text} > Budget: {movieDetails.budget}</Text>: ''}</Text>}        
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
        padding: 4,
    }, 
    title: {
        color: 'grey',
        fontSize: 20, 
        margin: 10, 
        fontWeight: 'bold', 
    }
});

export default MoviesDetails;