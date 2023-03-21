import React from "react";
import { StyleSheet } from "react-native";
import PeopleList from "./PeopleList";

const TrendingPeople = ({results}) => {
    return (
        <PeopleList data={results} header={'Trending People'} />
)};

const styles = StyleSheet.create({});

export default TrendingPeople;