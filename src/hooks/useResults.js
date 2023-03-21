import { useState, useEffect } from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [popularTvShows, setPopularTvShows] = useState([]);

    const getPopularTvShows = async () => {

        try {
            const response = await TmdbApi.get('/tv/popular')
            setPopularTvShows(response.data.results)
        } catch (err) {
            console.log(Error(err))
        }
        
    };

    useEffect(() => {
        getPopularTvShows();
    },[])

    return [popularTvShows];
};