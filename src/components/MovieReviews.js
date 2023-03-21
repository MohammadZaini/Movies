import React, {useState, useEffect} from "react";
import { View, Text ,StyleSheet , FlatList, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import TmdbApi from "../api/TmdbApi";

const MovieReviews = ({id}) => {
    const [movieReviews, setMovieReviews] = useState([]);

    const getMovieReviews = async (id) => {
        try {
            const response = await TmdbApi.get(`/movie/${id}/reviews`)
            setMovieReviews(response.data.results)
        } catch(error) {
            console.log('Reviews Error')
            console.log(Error(error))
        }
    };

    useEffect(() => {
        getMovieReviews(id)
    },[]);

    return (
            <FlatList
            horizontal
            data={movieReviews}
            keyExtractor={(person) => person.id }
            renderItem={({item}) => {
                return (
                    <View style={styles.container} >

                        <View style={{flexDirection: 'row'}} >
                            <Image 
                            style={styles.image} 
                            source={{uri: `https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`}} />
                            <Text style={{marginTop: 30, textAlign: 'center', fontSize:18, marginLeft: 10, fontWeight: 'bold'}} >
                            {item.author_details.username} :
                            </Text>
                        </View>

                        <View>
                            <Text style={{ width: 350, textAlign: 'justify', marginHorizontal: 10}} >
                                {item.content}
                            </Text>
                            <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 10, marginTop: 10}}>
                                {<Entypo name="star" size={23} color="yellow" />}  {item.author_details.rating}
                            </Text>
                        </View>
                        
                    </View>  
    )}}
        />
    )};
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 2,
        borderColor: 'grey',
        marginHorizontal: 10,
        marginVertical: 10,
        flexWrap: 'wrap',        
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        backgroundColor: 'black'
    },
});

export default MovieReviews;