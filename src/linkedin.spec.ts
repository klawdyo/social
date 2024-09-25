import { LinkedIn } from './linkedin';

describe('LinkedIn Class', () => {
    test('Deve aceitar username válido diretamente', () => {
        const linkedIn = new LinkedIn('valid-username');
        expect(linkedIn.toString()).toBe('valid-username');
        expect(linkedIn.getUrl()).toBe('https://linkedin.com/in/valid-username');
    });

    test('Deve aceitar URL válida', () => {
        const linkedIn = new LinkedIn('https://linkedin.com/in/valid-username');
        expect(linkedIn.toString()).toBe('valid-username');
        expect(linkedIn.getUrl()).toBe('https://linkedin.com/in/valid-username');
    });

    test('Deve lançar erro para username muito curto', () => {
        expect(() => new LinkedIn('ab')).toThrow();
    });

    test('Deve lançar erro para username muito longo', () => {
        expect(() => new LinkedIn('a'.repeat(101))).toThrow();
    });

    test('Deve lançar erro para URL fora do padrão', () => {
        expect(() => new LinkedIn('https://linkedin.com/in/')).toThrow();
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new LinkedIn(null as any)).toThrow();
        expect(() => new LinkedIn(undefined as any)).toThrow();
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new LinkedIn('')).toThrow();
    });
});
