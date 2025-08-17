import { userEvent } from '@testing-library/react-native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const UsersList = () => {

    type User = {id: number; name: string};

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return(
            <Text>Carregando</Text>
        )
    }
    else {
        return (
            <View>
                {users.map(user => (
                    <Text key={user.id}>{user.name}</Text>
                ))}
            </View>
        );
    }
};