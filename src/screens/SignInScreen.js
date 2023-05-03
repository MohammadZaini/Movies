import React, {useContext} from "react";
import { View, StyleSheet} from "react-native";
import AuthForm from "../components/authenticationComponents/AuthForm";
import NavLink from "../components/authenticationComponents/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
    const {state, signIn} =  useContext(AuthContext);

    return <View>
        <AuthForm 
        headerSign={'Sign In'} 
        buttonTitle={'Sign In'} 
        onSubmit={signIn}
        errorMessage={state.errorMessage}
        />
        <Spacer/>
        <NavLink 
        text={"Don't have an account yet? Sign Up"}
        navigateTo={'SignUp'}
        />
    </View>
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({});

export default SignInScreen;