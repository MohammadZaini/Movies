import React from "react";
import { View, StyleSheet, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { getAuth , signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const SettingsScreen = ({navigation}) => {

    const logOut = async () => {
        try {
            await signOut(auth);
            navigation.navigate('SignIn')

        } catch(error) {
            console.log(error)
        }
    }

    return <View>
        <SafeAreaView>
        <Button 
        onPress={() => logOut()}
        title="Sign Out" 
        color={'red'}
        />
        </SafeAreaView>
    </View>
};

SettingsScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({focused}) => ( 
        <Ionicons name="settings-outline" size={24} color={focused ? 'red' : 'black'} />
        )
    }
}

const styles = StyleSheet.create({});

export default SettingsScreen;