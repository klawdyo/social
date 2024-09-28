import { Threads } from '../src/threads';

describe('Threads Class', () => {
    test('Deve aceitar username válido diretamente', () => {
        const threads = new Threads('valid_username');
        expect(threads.toString()).toBe('valid_username');
        expect(threads.getUrl()).toBe('https://threads.net/@valid_username');
    });

    test('Deve aceitar URL válida', () => {
        const threads = new Threads('https://threads.net/@validusername');
        expect(threads.toString()).toBe('validusername');
        expect(threads.getUrl()).toBe('https://threads.net/@validusername');
    });

    test('Deve lançar erro para username muito curto (menos de 1 caractere)', () => {
        expect(() => new Threads('')).toThrow()
    });

    test('Deve lançar erro para username muito longo (mais de 30 caracteres)', () => {
        expect(() => new Threads('a'.repeat(31))).toThrow()
    });

    test('Deve lançar erro para URL fora do padrão', () => {
        expect(() => new Threads('https://threads.net/invalid-url')).toThrow()
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new Threads(null as any)).toThrow()
        expect(() => new Threads(undefined as any)).toThrow()
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new Threads('')).toThrow()
    });

    test('Deve lançar erro para caracteres não permitidos', () => {
        expect(() => new Threads('invalid#username')).toThrow()
    });
});
