import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react-native';
import { Welcome } from '../src/Components/welcome';

describe("Welcome component", () => {
    it("renderiza a mensagem de boas-vindas com o nome correto", () => {
        const {getByText} = render(<Welcome name="João"/>); 

        expect(getByText("Bem vindo, João!")).toBeTruthy();
    })
})

