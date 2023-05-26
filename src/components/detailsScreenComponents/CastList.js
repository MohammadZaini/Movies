import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import TmdbApi from "../../api/TmdbApi";
import PeopleList from "../PeopleList";

const CastList = ({ id, routeName }) => {
    const [cast, setCast] = useState([]);


    const getCastById = async (id) => {
        try {
            const response = await TmdbApi.get(`/${getType()}/${id}/credits`)
            setTimeout(() => {
                setCast(response.data.cast)
            }, 1500)

        } catch (error) {
            console.log(Error(error))
        };
    };

    const getType = () => {
        if (routeName === 'Series') {
            return 'tv';
        } else {
            return 'movie';
        };
    };

    useEffect(() => {
        getCastById(id)
    }, [])

    return (
        <PeopleList data={cast} />
    );
};

const styles = StyleSheet.create({});

export default CastList;