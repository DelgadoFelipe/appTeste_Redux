import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {incrementar, decrementar} from '../redux/contadorSlice';

const ContadorRedux = () => {
    const valor = useSelector(state => state.contador.valor)
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.numero}>{valor}</Text>
            <View style={styles.botoes}>
                
                <TouchableOpacity onPress={() => dispatch(incrementar())}>
                    <Text>Incrementar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(decrementar())}>
                    <Text>Decrementar</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    numero: {
        fontSize: 48,
        marginBottom: 20,
    },

    botoes: {
        flexDirection: 'row',
        gap: 10,
    }
})

export default ContadorRedux;