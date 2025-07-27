
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react-native';

function testeSave(testes) {

    if (testes.teste1 != '' || testes.teste2 != '' || testes.teste3 != '' || testes.teste4 != '') {
        return {
            teste1: testes.teste1,
            teste2: testes.teste2,
            teste3: testes.teste3,
            teste4: testes.teste4
        }
    }

    return json;
}

describe('testeSave()', () => {
    it('retorna valores quando json não está vázio', () => {
        const testes = {
            teste1: 'A',
            teste2: 'B',
            teste3: 'C',
            teste4: 'D'
        };

        const resultado = testeSave(testes)

        expect(resultado).toEqual({
            teste1: 'A',
            teste2: 'B',
            teste3: 'C',
            teste4: 'D'
        })
    })

    
})

