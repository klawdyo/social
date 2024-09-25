import { X } from './x';

describe('X Class', () => {
    test('Deve aceitar username válido diretamente', () => {
        const twitter = new X('valid_username');
        expect(twitter.toString()).toBe('valid_username');
        expect(twitter.getUrl()).toBe('https://x.com/valid_username');
    });

    test.each([
        'https://x.com/validusername',
        'https://x.com/0',
        'https://x.com/_a_',
    ])('A URL %s deve ser válida', (url) => {
        const twitter = new X(url);
        // expect(twitter.toString()).toBe(url);
        expect(twitter.getUrl()).toBe(url);
    });

    test('Deve lançar erro para username muito curto', () => {
        expect(() => new X('')).toThrow();
    });

    test('Deve lançar erro para username muito longo', () => {
        expect(() => new X('a'.repeat(16))).toThrow();
    });

    test.each([
        'https://x.com/-/',
        'https://x.com//',
        'https://x.com/2222222222222222/',
        'https://x.com/a.a',

    ])('Deve lançar erro para URL %s', (url) => {
        expect(() => new X(url)).toThrow();
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new X(null as any)).toThrow();
        expect(() => new X(undefined as any)).toThrow();
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new X('')).toThrow();
    });
});
