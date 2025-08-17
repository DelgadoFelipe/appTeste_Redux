import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import { UsersList } from '../src/Components/usersList';

(global.fetch as jest.Mock) = jest.fn();

describe("UsersList", () => {
    beforeEach(() => {
        (global.fetch as jest.Mock).mockClear();
    });

    it("deve exibir 'Carregando' e depois a lista de usuários", async () => {
        const fakeUsers = [
            {id: 1, name: "João"},
            {id: 2, name: "Maria"},
        ];

        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: async () => fakeUsers,
        });

        const {getByText, queryByText} = render(<UsersList />);

        expect(getByText("Carregando")).toBeTruthy()

        await waitFor(() => {
            expect(queryByText("Carregando")).toBeNull();
            expect(getByText("João")).toBeTruthy();
            expect(getByText("Maria")).toBeTruthy;
        })
    })
})