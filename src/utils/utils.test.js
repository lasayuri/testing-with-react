import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transição', () => {
    test('Que é um depósito, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50,
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);
        expect(novoSaldo).toBe(150);
    });

    test('Que é uma transferência, o saldo deve diminuir', () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 50,
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);
        expect(novoSaldo).toBe(50);
    });
})

test('Deve retornar o valor do saldo atualizado com o rendiemnto', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
    const saldo = 100;
    const novoSaldo = calculaRendimento(saldo);
    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);
})