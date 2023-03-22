import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { navigate } from "../../navigationActionsRef";


const NavLink = ({text, navigateTo}) => {
    return (
        <TouchableOpacity onPress={() => navigate(navigateTo)} >
    <Text style={{color: 'blue', fontSize: 15}} >{text}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({});

export default NavLink;