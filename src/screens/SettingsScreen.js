import React from "react";
import { Text, View, StyleSheet, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
    
    return <View>
        <SafeAreaView>
        <Button 
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