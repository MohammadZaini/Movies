import { useState, useEffect } from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [onAirTvShows, setOnAirTvShows] = useState([]);

    const getOnAirTvShows = async () => {
        try {
            const response = await TmdbApi.get('/tv/on_the_air')
            setOnAirTvShows(response.data.results)
        } catch (err) {
            console.log(Error(err))
        } 
    };

    useEffect(() => {
        getOnAirTvShows()
    },[])

    return [onAirTvShows];
};