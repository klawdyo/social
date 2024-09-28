import {Facebook} from '../src/facebook'

describe('Facebook Class', () => {
    test.each([
        'valid_username',
        'valid.username',
        'validusername_',
        '_validusername_',
        '90validusername',
        'validusername88',
    ])('Usuário %s deve ser válido', (username) => {
        const insta = new Facebook(username);
        expect(insta.toString()).toBe(username);
        expect(insta.getUrl()).toBe(`https://facebook.com/${username}`);
    });

    test('Deve aceitar URL válida', () => {
        const insta = new Facebook('https://facebook.com/valid.username');
        expect(insta.toString()).toBe('valid.username');
        expect(insta.getUrl()).toBe('https://facebook.com/valid.username');
    });

    test('Deve lançar erro para username muito curto', () => {
        expect(() => new Facebook('')).toThrow();
    });

    test('Deve lançar erro para username muito longo', () => {
        expect(() => new Facebook('a'.repeat(31))).toThrow();
    });

    test.each([
        'inva-lid',
        'inva..lid',
        'invalid-',
        '-invalid',
        'invalid.',
        '.invalid',
    ])('Deve lançar erro para usuário inválido %s', (url) => {
        expect(() => new Facebook(url)).toThrow();
    });

    test.each([
        'https://facebook.com/inva-lid',
        'https://facebook.com/inva..lid',
        'https://facebook.com/invalid-',
        'https://facebook.com/-invalid',
        'https://facebook.com/invalid.',
        'https://facebook.com/.invalid',
    ])('Deve lançar erro para URL fora do padrão', (url) => {
        expect(() => new Facebook(url)).toThrow();
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new Facebook(null as any)).toThrow();
        expect(() => new Facebook(undefined as any)).toThrow();
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new Facebook('')).toThrow();
    });
});
