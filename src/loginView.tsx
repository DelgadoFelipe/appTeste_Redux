import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

type Props = {
  onLogin?: (email: string, senha: string) => void;
};

const LoginView = ({ onLogin }: Props) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
    <View style={{backgroundColor: '#fff'}}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            testID="email-input"
        />
        <TextInput
            placeholder="Senha"
            value={senha}
            secureTextEntry
            onChangeText={setSenha}
            testID="senha-input"
        />
        {onLogin ? (
            <Button title="Entrar" onPress={() => onLogin(email, senha)} />
        ):(null)} 
    </View>
    );
};

export default LoginView;