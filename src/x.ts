import { Social } from "./social";

/**
 * Regras:
 * - Entre 1 e 15 caracteres
 * - Somente letras, números e sublinhado
 * 
 */
export class X extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9_]{1,15}$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})\/?$/;
  protected _urlBase: string = 'https://x.com/';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}
