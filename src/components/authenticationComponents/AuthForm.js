import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-paper";

const AuthForm = ({ buttonTitle, headerSign, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container} >

        <Text h1 style={{ color: 'red', marginBottom: 20 }}>{headerSign}</Text>

        <View style={styles.emailInput} >
            <MaterialCommunityIcons name="email-outline" size={30} color="grey" style={{ marginTop: 10, marginRight: 5 }} />
            <TextInput
                activeUnderlineColor="red"
                style={{ flex: 1, height: 55, borderRadius: 10, marginHorizontal: 5 }}
                value={email}
                onChangeText={setEmail}
                label="Email"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>

        <View style={styles.passwordInput} >
            <Ionicons name="lock-closed-outline" size={30} color="grey" style={{ marginTop: 10, marginRight: 5 }} />
            <TextInput
                activeUnderlineColor="red"
                style={{ flex: 1, height: 55, borderRadius: 10, marginHorizontal: 5 }}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                label="Password"
            />
        </View>
        {errorMessage ? <Text style={styles.errorMessage} >{errorMessage}</Text> : null}
        <Button
            title={buttonTitle}
            onPress={() => onSubmit({ email, password })}
            color={'red'}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginTop: 120,
    }, emailInput: {
        flexDirection: 'row',
        marginBottom: 10,
    }, passwordInput: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    errorMessage: {
        color: 'red',
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 17
    }
});

export default AuthForm;