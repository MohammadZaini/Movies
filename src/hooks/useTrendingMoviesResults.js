import  {useState, useEffect} from "react";
import TmdbApi from "../api/TmdbApi";

export default () => {
    const [trendingMoviesResults, setTrendingMoviesResults] = useState([]);

    const getTrendingMovies = async () => {
        try {
            const response = await TmdbApi.get('/trending/movie/day')
            setTrendingMoviesResults(response.data.results)
        } catch(err) {
            console.log(Error(err))
        };
    };

    useEffect(() => {
        getTrendingMovies()
    },[]);

    return [trendingMoviesResults];
};