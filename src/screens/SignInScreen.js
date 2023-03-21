import React from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

const SignInScreen = ({navigation}) => {
    
    const validation = () => {

    }

    return <View>
        <AuthForm 
        headerSign={'Sign In'} 
        buttonTitle={'Sign In'} 
        // onPress={() => navigation.navigate('homeFlow')}
        />
        <Spacer/>
        <NavLink 
        text={"Already have an account? Sign In"}
        navigateTo={'SignUp'}
        />
    </View>
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({});

export default SignInScreen;