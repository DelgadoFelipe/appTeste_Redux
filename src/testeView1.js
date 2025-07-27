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
import { resetTeste, setTeste1, setTeste2, setTeste3, setTeste4, } from '../redux/contadorSlice';


const TesteView1 = ({navigation}) => {
    const dispatch = useDispatch();
        
    return (
        <View style={Styles.areaScreenTeste}>
            <TextInput
                mode="outlined" 
                label="teste1"
                autoFocus
                style={Styles.inputLogin}
                left={<TextInput.Icon icon="account"/>}
                value={useSelector(state => state.contador.teste1)}
                onChangeText={text => dispatch(setTeste1(text))}
                // theme={{ colors: { primary: colors.blue } }}
            />

            <TextInput
                mode="outlined" 
                label="teste2"
                autoFocus
                style={Styles.inputLogin}
                left={<TextInput.Icon icon="account"/>}
                value={useSelector(state => state.contador.teste2)}
                onChangeText={text => dispatch(setTeste2(text))}
                // theme={{ colors: { primary: colors.blue } }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('testeView2')}>
                <Text>Avançar</Text>
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

export default TesteView1; 