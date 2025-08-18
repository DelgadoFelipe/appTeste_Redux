import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginView from '../src/loginView';

describe("loginView", () => {
    it("deve chamar onLogin com email e senha corretos", () => {
        const mockOnLogin = jest.fn();

        const {getByTestId, getByText} = render(
            <LoginView onLogin={mockOnLogin}/>
        );

        fireEvent.changeText(getByTestId("email-input"), "teste@exemplo.com");
        fireEvent.changeText(getByTestId("senha-input"), "1234");

        fireEvent.press(getByText("Entrar"));

        expect(mockOnLogin).toHaveBeenCalledWith("teste@exemplo.com", "1234");
    });
});