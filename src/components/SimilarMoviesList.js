import React, {useState, useEffect} from "react";
import { StyleSheet } from "react-native";
// import api from "./api";
import TmdbApi from "../api/TmdbApi";
import List from "./List";

const SimilarMoviesList = ({id}) => {
    const [similarMovies, setSimilarMovies] = useState([]);

    const getSimilarMoviesById = async (id) => {
        try {
            const response = await TmdbApi.get(`/movie/${id}/similar`)
            setSimilarMovies(response.data.results)
        } catch(error) {
            console.log(Error(error))
        }
    };

    useEffect(() => {
        getSimilarMoviesById(id)
    },[]);
    
    return (
        <List data={similarMovies} />
    );
};

const styles = StyleSheet.create({});

export default SimilarMoviesList;