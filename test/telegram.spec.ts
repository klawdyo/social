import { Telegram } from '../src/telegram';

describe('Telegram Class', () => {
    test('Deve aceitar username válido diretamente', () => {
        const telegram = new Telegram('valid_username');
        expect(telegram.toString()).toBe('valid_username');
        expect(telegram.getUrl()).toBe('https://t.me/valid_username');
    });

    test('Deve aceitar URL válida', () => {
        const telegram = new Telegram('https://t.me/validusername');
        expect(telegram.toString()).toBe('validusername');
        expect(telegram.getUrl()).toBe('https://t.me/validusername');
    });

    test('Deve lançar erro para username muito curto (menos de 5 caracteres)', () => {
        expect(() => new Telegram('abc')).toThrow()
    });

    test('Deve lançar erro para username muito longo (mais de 32 caracteres)', () => {
        expect(() => new Telegram('a'.repeat(33))).toThrow()
    });

    test('Deve lançar erro para URL fora do padrão', () => {
        expect(() => new Telegram('https://t.me/invalid-url/')).toThrow()
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new Telegram(null as any)).toThrow()
        expect(() => new Telegram(undefined as any)).toThrow()
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new Telegram('')).toThrow()
    });

    test('Deve lançar erro para caracteres não permitidos', () => {
        expect(() => new Telegram('invalid#username')).toThrow()
    });
});
