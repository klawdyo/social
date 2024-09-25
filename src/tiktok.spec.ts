import { TikTok } from './tiktok';

describe('TikTok Class', () => {
    test('Deve aceitar username válido diretamente', () => {
        const tiktok = new TikTok('valid_username');
        expect(tiktok.toString()).toBe('valid_username');
        expect(tiktok.getUrl()).toBe('https://tiktok.com/@valid_username');
    });

    test('Deve aceitar URL válida', () => {
        const tiktok = new TikTok('https://tiktok.com/@validusername');
        expect(tiktok.toString()).toBe('validusername');
        expect(tiktok.getUrl()).toBe('https://tiktok.com/@validusername');
    });

    test('Deve lançar erro para username muito curto', () => {
        expect(() => new TikTok('')).toThrow()
    });

    test('Deve lançar erro para username muito longo', () => {
        expect(() => new TikTok('a'.repeat(25))).toThrow()
    });

    test('Deve lançar erro para URL fora do padrão', () => {
        expect(() => new TikTok('https://tiktok.com/invalid/')).toThrow()
    });

    test('Deve lançar erro para valores nulos ou indefinidos', () => {
        expect(() => new TikTok(null as any)).toThrow()
        expect(() => new TikTok(undefined as any)).toThrow()
    });

    test('Deve lançar erro para string vazia', () => {
        expect(() => new TikTok('')).toThrow()
    });
});
