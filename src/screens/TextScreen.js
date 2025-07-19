import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    let [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput 
                value={password}
                onChangeText={(e) => setPassword(e) }
                style={styles.input} 
            />
            {password.length < 5 ? <Text>Password must be at leat 5 characters long!</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 8,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;