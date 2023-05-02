import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/authenticationComponents/AuthForm";
import NavLink from "../components/authenticationComponents/NavLink";
import Spacer from "../components/Spacer";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getCredetials = (username, password) => {
        setEmail(username)
        setPassword(password)
        validation()      
    };

    const validation = () => {
        if(email.length > 0 && password.length > 6) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                });

                navigation.navigate('homeFlow')
        } else {
            <Text>Handle it</Text>
            }
        };

    return <View>
        <AuthForm  
        headerSign={'Sign Up'} 
        buttonTitle={'Sign Up'}
        // onPress={() => navigation.navigate('homeFlow')}
        onPress={getCredetials}
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
    }
};

export default SignUpScreen;