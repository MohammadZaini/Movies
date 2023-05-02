import React, {useState} from "react";
import { View, StyleSheet} from "react-native";
import AuthForm from "../components/authenticationComponents/AuthForm";
import NavLink from "../components/authenticationComponents/NavLink";
import Spacer from "../components/Spacer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getCredetials = (email, password) => {
        setEmail(email)
        setPassword(password)
        validation();    
    };

    const validation = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
            console.log(userCredential.user)
            navigation.navigate('homeFlow')
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });     
    }

    return <View>
        <AuthForm 
        headerSign={'Sign In'} 
        buttonTitle={'Sign In'} 
        onPress={getCredetials}
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
    }
}

const styles = StyleSheet.create({});

export default SignInScreen;