import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";


const HomeView = () => {
    return (
    <KeyboardAvoidingView style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#fff', justifyContent: 'center'}}>
        <TouchableWithoutFeedback>
            <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', display: 'flex'}}>
                <Text style={{color: '#252525'}}>Deu certo!</Text>
            </View>
        </TouchableWithoutFeedback> 
    </KeyboardAvoidingView>
    );
};

export default HomeView;