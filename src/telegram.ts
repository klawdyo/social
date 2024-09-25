import { Social } from "./social";

/**
 * Regras:
 * - Entre 5 e 32 caracteres
 * - Somente letras, números e sublinhado
 * 
 */
export class Telegram extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9_]{5,32}$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?t\.me\/([a-zA-Z0-9_]{5,32})\/?$/;
  protected _urlBase: string = 'https://t.me/';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}
