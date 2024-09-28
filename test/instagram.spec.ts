import {Instagram} from '../src/instagram'

describe('Instagram Class', () => {
    test.each([
        'valid_username',
        'valid.username',
        'validusername_',
        '_validusername_',
        '90validusername',
        'validusername88',
    ])('Usuário %s deve ser válido', (username) => {
        const insta = new Instagram(username);
        expect(insta.toString()).toBe(username);
        expect(insta.getUrl()).toBe(`https://instagram.com/${username}`);
    });

    test('Deve aceitar URL válida', () => {
        const insta = new Instagram('https://instagram.com/valid.username');
        expect(insta.toString()).toBe('valid.username');
        expect(insta.getUrl()).toBe('https://instagram.com/valid.username');
    });

    test('Deve lançar erro para username muito curto', () => {
        expect(() => new Instagram('')).toThrow();
    });

    test('Deve lançar erro para username muito longo', () => {
        expect(() => new Instagram('a'.repeat(31))).toThrow();
    });

    test.each([
        'inva-lid',
        'inva..lid',
        'invalid-',
        '-invalid',
        'invalid.',
        '.invalid',
    ])('Deve lançar erro para usuário inválido %s', (url) => {
        expect(() => new Instagram(url)).toThrow();
    });

    test.each([
        'https://instagram.com/inva-lid',
        'https://instagram.com/inva..lid',
        'https://instagram.com/invalid-',
        'https://instagram.com/-invalid',
        'https://instagram.com/invalid.',
        'https://instagram.com/.invalid',
    ])('Deve lançar erro para URL fora do padrão', (url) => {
        expect(() => new Instagram(url)).toThrow();
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new Instagram(null as any)).toThrow();
        expect(() => new Instagram(undefined as any)).toThrow();
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new Instagram('')).toThrow();
    });
});
