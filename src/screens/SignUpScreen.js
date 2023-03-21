import React from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
const SignUpScreen = ({navigation}) => {
    
    return <View>
        <AuthForm  
        headerSign={'Sign Up'} 
        buttonTitle={'Sign Up'}
        // onPress={() => navigation.navigate('homeFlow')}
        />
        <Spacer/>
        <NavLink 
        text={"Don't have an account yet? Sign Up"}
        navigateTo={'SignIn'}
        />
    </View>
};

const styles = StyleSheet.create({});

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
};

export default SignUpScreen;