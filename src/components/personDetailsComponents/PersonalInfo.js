import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PersonalInfo = ({ detailsResults }) => {
    const date = new Date();

    return (
        <View style={{ flexDirection: 'row', margin: 20, width: 200 }} >
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/original${detailsResults.profile_path}` }}
            />

            <View style={{ marginLeft: 20, justifyContent: 'space-between' }} >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{detailsResults.name}</Text>

                <Text>Known for</Text>
                <Text style={styles.infoText}>{detailsResults.known_for_department}</Text>

                <Text>Gender</Text>
                {detailsResults.gender === 2 ? <Text style={styles.infoText}>Male</Text> : <Text style={styles.infoText}>Female</Text>}

                {console.log(detailsResults.birthday)}
                <Text>Birthday</Text>
                {detailsResults.deathday
                    ? <Text style={styles.infoText}>{detailsResults.birthday} </Text>
                    : <Text style={styles.infoText}>{detailsResults.birthday} ({date.getFullYear() - `${detailsResults.birthday}`.slice(0, 4)}  years old)</Text>}

                {detailsResults.deathday ? <Text>Death day</Text> : ''}
                {detailsResults.deathday ? <Text style={styles.infoText}>{detailsResults.deathday} ({`${detailsResults.deathday}`.slice(0, 4) - `${detailsResults.birthday}`.slice(0, 4)} years old)</Text> : ''}

                <Text>Place of birth</Text>
                <Text style={styles.infoText}>{detailsResults.place_of_birth}</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 150,
        borderRadius: 20
    },
    infoText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default PersonalInfo;