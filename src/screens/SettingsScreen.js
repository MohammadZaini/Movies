import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { Context as AuthContext } from "../context/AuthContext";

const SettingsScreen = () => {
    const { signout } = useContext(AuthContext);

    return <View>
        <SafeAreaView>
            <Button
                onPress={signout}
                title="Sign Out"
                color={'red'}
            />
        </SafeAreaView>
    </View>
};

SettingsScreen.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <Ionicons name="settings-outline" size={24} color={focused ? 'red' : 'grey'} />
        )
    };
};

const styles = StyleSheet.create({});

export default SettingsScreen;