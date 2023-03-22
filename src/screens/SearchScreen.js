import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline, Circle } from "react-native-maps";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import { Feather } from '@expo/vector-icons';
import Spacer from "../components/Spacer";
import SearchBar from "../components/searchScreenComponent/SearchBar";
// import api from "./components/api";
import TmdbApi from "../api/TmdbApi";
import SearchedMovies from "../components/searchScreenComponent/SearchedMovies";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('')

    const getSearchedReults = async (searchTerm) => {
        try {
            const response = await TmdbApi.get(`/search/multi?query=${searchTerm}`)
            setResults(response.data.results)
            console.log(response.data.results.json())

        } catch (err) {
            console.log('Search Screen')
            console.log(Error(err))
        } 
    };

    useEffect(() => {
        getSearchedReults('wa');
    },[]);

    return <View> 
        <SafeAreaView>
        <SearchBar 
            placeholder={'Search for movies, series or tv shows'}
            term={term}
            onTermChange={setTerm}
            onSubmit={() => getSearchedReults(term)}
            />
        <SearchedMovies searchedMoviesResults={results} />

        </SafeAreaView>
    </View>
};

SearchScreen.navigationOptions = () => {
    return {
        headerShown: false,
        tabBarIcon: ({focused}) => (
        <Feather name="search" size={24} color={focused ? 'red': 'black'} />
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: 500,
        marginBottom: 10,
        marginTop: 20
    }
});

export default SearchScreen;







// const SearchScreen = () => {
//     const [err,setError] = useState(null);

//     const locationPermission = async () => {
//     try{
//         const { granted } = await requestForegroundPermissionsAsync();
//         if(!granted) {
//             throw new Error("Location permission not granted");
//         }
//         subscriber = await watchPositionAsync({
//             accuracy: Accuracy.BestForNavigation,
//             timeInterval: 1000,
//             distanceInterval: 10,
//         }, (location) => {
//             console.log(location)
//         })

//         } catch(e) {
//             setError(e)
//         }
//     }

//     useEffect(() => {
//         locationPermission()
//     },[])


//     let points = [];
//     for (let i = 0; i < 20; i++) {
//         points.push({
//             latitude: 31.9660498 + i * 0.001 ,
//             longitude: 35.8694625 + i * 0.001
//         })
//     }

//     return <View>   
//         <SafeAreaView>
//         <MapView 
//         initialRegion={{
//             latitude:  31.9660498,
//             longitude: 35.8694625 ,    
//             latitudeDelta:0.01,
//             longitudeDelta:0.01
//         }}
//         style={styles.map} 
//         >
//         <Polyline coordinates={points} />
//         </MapView>

//         <Button style={styles.button} title="Start the run"  color={'red'} />
//         <Spacer/>
//         <Button title="Stop the run"  color={'red'}/>
//         <Spacer/>
//         {err?<Text>Please Enable location</Text>: null}
//         </SafeAreaView>
//     </View>
// };