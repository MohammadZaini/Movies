import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/authenticationComponents/AuthForm";
import NavLink from "../components/authenticationComponents/NavLink";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = () => {
    const {state, signUp} = useContext(AuthContext);
    
    return <View>
        <AuthForm  
        headerSign={'Sign Up'} 
        buttonTitle={'Sign Up'}
        onSubmit={signUp}
        errorMessage={state.errorMessage}
        />
        <Spacer/>
        <NavLink 
        text={"Already have an account? Sign In"}
        navigateTo={'SignIn'}
        />
    </View>
};

const styles = StyleSheet.create({});

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignUpScreen;