import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Alert,
    Dimensions,
    Easing,
    Animated,
    Linking,
    StyleSheet
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setTeste1, setTeste2, setTeste3, setTeste4, resetTeste} from '../redux/contadorSlice';
import { render } from '@testing-library/react-native';

const TesteView2 = ({navigation}) => {
    const dispatch = useDispatch();
    const testes = useSelector(state => state.contador);
    
    function testeSave() {

        if (testes.teste1 != '' || testes.teste2 != '' || testes.teste3 != '' || testes.teste4 != '') {
            var json = "{ ";
            json += "teste1: " + testes.teste1 + "; ";
            json += "teste2: " + testes.teste2 + "; ";
            json += "teste3: " + testes.teste3 + "; ";
            json += "teste4: " + testes.teste4 + "";
            json += "}"
        }

        console.log('testeJson: ' + json)
    }

    return (
        <View style={Styles.areaScreenTeste}>
            <TextInput
                mode="outlined" 
                label="teste3"
                autoFocus
                style={Styles.inputLogin}
                left={<TextInput.Icon icon="account"/>}
                value={useSelector(state => state.contador.teste3)}
                onChangeText={text => dispatch(setTeste3(text))}
                // theme={{ colors: { primary: colors.blue } }}
            />

            <TextInput
                mode="outlined" 
                label="teste4"
                autoFocus
                style={Styles.inputLogin}
                left={<TextInput.Icon icon="account"/>}
                value={useSelector(state => state.contador.teste4)}
                onChangeText={text => dispatch(setTeste4(text))}
                // theme={{ colors: { primary: colors.blue } }}
            />

            <TouchableOpacity onPress={() => testeSave()}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => dispatch(resetTeste())}>
                <Text>Resetar</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    areaScreenTeste: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    inputLogin: {
        borderRadius: 0,
        width: Dimensions.get('window').width * 0.73,
        height: Dimensions.get('window').height * 0.06,
        marginTop: Dimensions.get('window').height * 0.02,
        backgroundColor: '#fff'
    }
})

export default TesteView2; 