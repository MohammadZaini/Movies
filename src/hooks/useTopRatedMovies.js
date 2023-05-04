import {useState, useEffect} from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [topRatedMovies, setTopRatedMovies]= useState([]);

    const getTopRatedTvShows = async () => {
        try {
            const response = await TmdbApi.get('/movie/top_rated')
            setTopRatedMovies(response.data.results)
        } catch (err) {
            console.log(Error(err))
        };     
    };

    useEffect(() => {
        getTopRatedTvShows()
    },[]);

    return [topRatedMovies];
};