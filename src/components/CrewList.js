import React, {useState, useEffect} from "react";
import {StyleSheet} from "react-native";
import TmdbApi from "../api/TmdbApi";
import PeopleList from "./PeopleList";

const CrewList = ({id}) => {
    const [crew, setCrew] = useState([]);

    const getCrewById = async (id) => {
        try {
            const response = await TmdbApi.get(`/movie/${id}/credits`)
            setCrew(response.data.crew)
        } catch(error) {
            console.log(Error(error))
        }
    };

    const filterDuplicatesCrew = crew.reduce((filteredArray, current) => {
    let obj = filteredArray.find(item => item.id === current.id);

    if(obj){
        return filteredArray;
    } 
    return filteredArray.concat([current])
    },[])

    useEffect(() => {
        getCrewById(id)
    },[]);

    return (
        <PeopleList data={filterDuplicatesCrew} />
    );
};

const styles = StyleSheet.create({});

export default CrewList;