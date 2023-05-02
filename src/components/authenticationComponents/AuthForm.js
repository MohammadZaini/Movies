import React, {useState, useContext} from "react";
import { View, StyleSheet, Button} from "react-native";
import { Input, Text} from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AuthForm = ({buttonTitle, headerSign, onPress}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container} >

        <Text h1 style={{color:'red', marginBottom:20}}>{headerSign}</Text>

        <View style={styles.emailInput} >
        <MaterialCommunityIcons name="email-outline" size={25} color="grey"  style={{marginTop:10}} />
        <Input
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        autoCapitalize="none"
        autoCorrect={false}  
        // underlineColorAndroid={'green'}
        />
        </View>

        <View style={styles.passwordInput} >
        <Ionicons name="lock-closed-outline" size={25} color="grey" style={{marginTop:10}} />
        <Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        
        />
        </View>
    <Button
    title={buttonTitle}
    // onPress={validation}
    onPress={() => onPress(email, password)}
    color={'red'}
    />
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginTop: 120,
    }, emailInput: {
        flexDirection: 'row'
    }, passwordInput: {
        flexDirection: 'row'
    }
});

export default AuthForm;