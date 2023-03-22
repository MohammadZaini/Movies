import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({placeholder, onSubmit, onTermChange, term}) => {

    return <View style={styles.container} >
        <AntDesign style={{marginTop:10, marginLeft:10}} name="search1" size={24} color="black" />

        <Input  
        value={term}
        onChangeText={onTermChange} 
        onEndEditing={onSubmit}
        placeholder={placeholder}
        autoCapitalize='none'
        autoCorrect= {false}
        />

    </View>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
});

export default SearchBar;