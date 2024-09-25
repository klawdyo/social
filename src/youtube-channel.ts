import { Social } from "./social";

/**
 * 
 * Regras:
 * - Aceita entre 3 e 30 caracteres, podendo ser números, letras, sublinhados, hífens e pontos
 * - Não pode terminar ou começar com ponto ou hífen
 * - Não pode começar com sublinhado. Pode terminar com sublinhado
 * - Aparentemente ele rejeita nome de usuário no padrão de 
 *   URL. Por exemplo, klawdyo.c é aceito mas klawdyo.co não.
 * 
 * Regex: https://regexr.com/869m5
 */
export class YoutubeChannel extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9][a-zA-Z0-9._-]{1,28}[a-zA-Z0-9_]$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?youtube\.com\/@(.*)\/?$/;
  protected _urlBase: string = 'https://youtube.com/@';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}
