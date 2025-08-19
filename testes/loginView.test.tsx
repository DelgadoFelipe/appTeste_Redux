import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import LoginView from '../src/loginView';
import {NavigationContainer} from '@react-navigation/native';

global.fetch = jest.fn();

describe("LoginView", () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    })

    it("Realiza login e redireciona para Home", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({token: "123"}),
        });

        const navtigateMock = jest.fn();

        const { getByTestId, getByText } = render(
            <NavigationContainer>
                <LoginView />
            </NavigationContainer>
        );
        
        fireEvent.changeText(getByTestId("input-email"), "teste@teste.com");
        fireEvent.changeText(getByTestId("input-senha"), "123456");

        fireEvent.press(getByText("Entrar"));

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                "https://api.exemplo.com/login",
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify({
                        email: "teste@teste.com",
                        senha: "123456",
                    })
                })
            )
        })
    });

    it("mostra o erro quando login falha", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        });

        const {getByTestId, getByText, findByText} = render(
            <NavigationContainer>
                <LoginView />
            </NavigationContainer>
        );

        fireEvent.changeText(getByTestId("input-email"), "teste@teste.com");
        fireEvent.changeText(getByTestId("input-senha"), "123");

        fireEvent.press(getByText("Entrar"));

        expect(await findByText("Login Inválido")).toBeTruthy();
    });
});

