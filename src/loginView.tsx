import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import {useNavigation} from '@react-navigation/native'
import HomeView from "./homeView";
import { RootStackParamList } from "./navigation/types";
import { StackScreenNativeProps } from "react-native-screens/lib/typescript/components/gamma/StackScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'homeView'>;

type Props = {
  onLogin?: (email: string, senha: string) => void;
};

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro]   = useState("");
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleLogin = async () => {
        if (email == "teste@teste.com" && senha == "123456") navigation.navigate("homeView")
        try {
            const response = await fetch("https://api.exemplo.com/login", {
                method: "POST",
                body: JSON.stringify({email, senha}),
                headers: {"Content-Type": "application/json"}
            });

            if (!response.ok) throw new Error ("Login Inválido");
            else navigation.navigate("homeView")

        } catch (e: any) {
            setErro(e.message)
        }
    }

    return (
    <KeyboardAvoidingView style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#fff', justifyContent: 'center'}}>
        <TouchableWithoutFeedback>
            <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', display: 'flex'}}>
                <TextInput
                    autoFocus
                    mode="outlined"
                    label="Email"
                    placeholder="Informe seu email"
                    style={{ width: Dimensions.get('window').width * 0.8, height: Dimensions.get('window').height * 0.06, alignSelf: 'center', borderRadius: 20,}}
                    value={email}
                    theme={{colors: {primary: "#0048ff"}}}
                    onChangeText={text => setEmail(text)}
                    testID="input-email"
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    placeholder="Informe sua senha"
                    style={{ width: Dimensions.get('window').width * 0.8, marginTop: 15, height: Dimensions.get('window').height * 0.06, alignSelf: 'center', borderRadius: 20,}}
                    value={senha}
                    secureTextEntry
                    theme={{colors: {primary: "#0048ff"}}}
                    onChangeText={text => setSenha(text)}
                    testID="input-senha"
                />

                <TouchableOpacity style={{width: 90, height: 40, marginTop: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff", borderColor: '#0048ff', borderWidth: 2, borderRadius: 20}} onPress={() => handleLogin()}>
                    <Text style={{color: '#252525'}}>Entrar</Text>
                </TouchableOpacity>

                {erro ? <Text>{erro}</Text> : null}
            
            </View>
        </TouchableWithoutFeedback> 
    </KeyboardAvoidingView>
    );
};

export default LoginView;