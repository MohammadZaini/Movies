import React, {useState, useEffect} from "react";
import { Text, StyleSheet, ScrollView, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TmdbApi from "../api/TmdbApi";
import PhotoList from "../components/personDetailsComponents/PhotosList";
import PersonalInfo from "../components/personDetailsComponents/PersonalInfo";

const PersonDetailsScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [personDetails, setPersonDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getPersonDetails = async id => {
        try{
            const response = await TmdbApi.get(`/person/${id}`)
            setPersonDetails(response.data)
            setIsLoaded(true)
        } catch(error) {
            console.log(error)
        }; 
    };

    useEffect(() => {
        getPersonDetails(id)
    },[]);

    if(!isLoaded) {
        return <ActivityIndicator size="large" color={'red'} style={{marginTop: 350}}/>
    }
    return (
    <View>
        <SafeAreaView>

            <PersonalInfo
            detailsResults={personDetails}
            />
            
            <Text style={styles.text} >Biography</Text>
            <ScrollView style={{height: 150}}>
                <Text style={{marginLeft:  15, fontSize: 15, textAlign: 'auto' }} >{personDetails.biography}</Text>
            </ScrollView>
            <Text style={styles.text} >Profiles</Text>
            <PhotoList
            id={id}
            />
        </SafeAreaView>
    </View>
)};

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