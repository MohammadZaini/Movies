import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TmdbApi from "../api/TmdbApi";
import PhotoList from "../components/personDetailsComponents/PhotosList";
import PersonalInfo from "../components/personDetailsComponents/PersonalInfo";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

const PersonDetailsScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [personDetails, setPersonDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPersonDetails = async id => {
        try {
            const response = await TmdbApi.get(`/person/${id}`)

            setTimeout(() => {
                setPersonDetails(response.data)
                setIsLoading(true)
            }, 2000);

        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getPersonDetails(id)
    }, []);

    if (!isLoading) {
        return <ActivityIndicator size="large" color={'red'} style={{ marginTop: 350 }} />
    }

    const Loading = styled(ActivityIndicator)`
        margin-left: -25px;
`;
    const LoadingContainer = styled.View`
        position: absolute;
        top: 50%;
        left: 50%;
`;

    return (
        <ScrollView>
            <SafeAreaView>
                <PersonalInfo
                    detailsResults={personDetails}
                />

                <Text style={styles.text} >Biography</Text>
                <ScrollView style={{ height: 150 }} nestedScrollEnabled>
                    <Text style={{ marginLeft: 15, fontSize: 15, textAlign: 'auto' }} >{personDetails.biography}</Text>
                </ScrollView>
                <Text style={styles.text} >Profiles</Text>
                <PhotoList
                    id={id}
                />
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginHorizontal: 15,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

PersonDetailsScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

export default PersonDetailsScreen;