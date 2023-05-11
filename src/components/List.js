import React from "react";
import { View,TouchableOpacity, FlatList, StyleSheet, Image, Text } from "react-native";
import { navigate } from "../navigationActionsRef";

const List = ({data, header, screenRoute}) => {
    return( 
        <View style={styles.containter}>
        {header ? <Text style={styles.header}>{header}</Text> : ''}
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => navigate('MoviesDetails', {id : item.id, screenRoute})} >
                    <Image
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
                    />
                </TouchableOpacity>
            );
        }}   
        />
    </View>
)};

const styles = StyleSheet.create({
    containter: {
        height: 330
    },
    image: {
        height:270,
        width:150,
        marginHorizontal:10,
        borderRadius: 10,
    },
    header: {
        fontSize: 24,  
        color: "red",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    }
});

export default List;