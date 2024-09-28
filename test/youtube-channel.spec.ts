
import { YoutubeChannel } from '../src/youtube-channel'
describe('YoutubeChannel Class', () => {
  test.each([
    'validusername',
    'validusername_',
    'valid.username',
    'valid_username',
    'valid-username',
  ])('Username %s deve ser definido', (input) => {
    const youtube = new YoutubeChannel(input);
    expect(youtube).toBeDefined()
  });



  test.each([
    '-invalid',
    'invalid-',
    'invalid.',
    '.invalid',
    '_invalid',
  ])('Lança erro no username %s', (input) => {
    expect(() => new YoutubeChannel(input)).toThrow()
  });

  test.each([
    'https://youtube.com/@valid.username',
    'https://www.youtube.com/@valid.username',
  ])('Deve aceitar a URL %s', (url) => {
    const youtube = new YoutubeChannel(url);

    expect(youtube).toBeDefined()
    expect(youtube.toString()).toBe('valid.username');
    expect(youtube.getUrl()).toBe('https://youtube.com/@valid.username');
  });

  test.each([
    'https://youtube.com/@-invalid',
    'https://youtube.com/@invalid-',
    'https://youtube.com/@invalid.',
    'https://youtube.com/@.invalid',
    'https://youtube.com/@_invalid',
  ])('Lança erro na url %s', (input) => {
    expect(() => new YoutubeChannel(input)).toThrow()
  });



  test.each([
    'a',
    'ab',
    'https://youtube.com/@a',
    'https://youtube.com/@ab',

  ])('O username em %s é curto', (input) => {
    expect(() => new YoutubeChannel(input)).toThrow();
  });

  test.each([
    'abcdefghijklmnopqrstuvwxyz01234',
    'https://youtube.com/@abcdefghijklmnopqrstuvwxyz01234',

  ])('O username em %s é longo', (input) => {
    expect(() => new YoutubeChannel(input)).toThrow();
  });

  test('Deve lançar erro para URL fora do padrão', () => {
    expect(() => new YoutubeChannel('https://youtube.com/invalidURL')).toThrow();
  });

  test('Deve lançar erro para valores nulos ou indefinidos', () => {
    expect(() => new YoutubeChannel(null as any)).toThrow();
    expect(() => new YoutubeChannel(undefined as any)).toThrow();
  });

  test('Deve lançar erro para string vazia', () => {
    expect(() => new YoutubeChannel('')).toThrow();
  });
});
