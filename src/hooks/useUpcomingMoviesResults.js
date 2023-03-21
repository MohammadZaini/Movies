import {useState, useEffect} from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcomingMovies = async () => {
    try {
            const response = await TmdbApi.get('/movie/upcoming')
            setUpcomingMovies(response.data.results)
    
    } catch (err) {
        console.log(Error(err))
    }
    
    };
    useEffect(() => {
        getUpcomingMovies()
    },[]);

    return [upcomingMovies];
};