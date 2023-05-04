import { useState, useEffect } from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);
    
    const getTopRatedTvShows = async () => {
        try {
            const response = await TmdbApi.get('/tv/top_rated')
            setTopRatedTvShows(response.data.results)
        } catch (err) {
            console.log(Error(err))
        };
    };

    useEffect(() => {
        getTopRatedTvShows()
    },[]);

    return [topRatedTvShows];
};