import { useState, useEffect } from "react";
import TmdbApi from "../api/TmdbApi";
export default () => {
    const [trendingPeople, setTrendingPeople] = useState([]);

    const getTrendingPeople = async () => {
        try {
            const response = await TmdbApi.get('/trending/person/day')
            setTrendingPeople(response.data.results)
        } catch (err) {
            console.log(Error(err))
        };
    };

    useEffect(() => {
        getTrendingPeople();
    },[])

    return [trendingPeople];
};