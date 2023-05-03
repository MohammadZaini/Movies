import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { navigate } from "../navigationActionsRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin': 
            return {errorMessage: '', accessToken: action.payload};

        case 'signup':
            return {...state, accessToken: action.payload };

        case 'signout': 
            return {accessToken: null};

        case 'add_error':
            return {...state, errorMessage: action.payload};

        default:
            return state;
    }
};

const signUp = dispatch => async ({email, password}) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        dispatch({
            type: 'signup',
            payload: user.accessToken
        })
        navigate('homeFlow')
        // ...
        })
        .catch((error) => {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign up'
            });
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

const signIn = dispatch => async ({email, password}) => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
            AsyncStorage.setItem('accessToken', user.accessToken )

            dispatch({
                type:'signin',
                payload: user.accessToken
            });
            navigate('homeFlow')
        })

        .catch((error) => {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });     
    };

    const signout = dispatch => async () => {
        await AsyncStorage.removeItem('accessToken')
        signOut(auth);
        dispatch({type: 'signout'})
        navigate('SignIn')
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signUp, signout},
    {accessToken: null, errorMessage:''}
);