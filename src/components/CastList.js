import React,{useState, useEffect} from "react";
import { StyleSheet} from "react-native";
import TmdbApi from "../api/TmdbApi";
import PeopleList from "./PeopleList";

const CastList = ({id}) => {
    const [cast, setCast] = useState([]);


    const getCastById = async (id) => {
        try {
            const response = await TmdbApi.get(`/movie/${id}/credits`)
            setCast(response.data.cast)
        } catch(error) {
            console.log(Error(error))
        };
    };

    useEffect(() => {
        getCastById(id)
    },[])
    
    return (  
        <PeopleList data={cast} />
    );
};

const styles = StyleSheet.create({});

export default CastList;