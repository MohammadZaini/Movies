import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const PeopleList = ({data, header}) => {
    return (  
        <View style={styles.container} > 
            {header ? <Text style={styles.header}>{header}</Text> : ''}
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={(person, index) => person.id + index.toString()}
            renderItem={({item})=> {
                return (
                    <TouchableOpacity>
                        <Image 
                            style={styles.image}
                            source={
                                item.profile_path ?
                                {uri:`https://image.tmdb.org/t/p/original${item.profile_path}`} 
                                : require('../../assets/1668898.png')
                            } />
                            <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                );
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180
    },
    image: {
        height:70,
        width: 70,
        margin: 10,
        borderRadius: 100,    
    },
    name: {
        width: 70,
        textAlign: 'center',
        marginLeft: 10
    },
    header: {
        fontSize: 24,  
        color: "red",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    }
});

export default PeopleList;