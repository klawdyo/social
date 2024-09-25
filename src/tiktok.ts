import { Social } from "./social";

/**
 * Regras:
 * - Entre 2 e 24 caracteres
 * - Somente letras, números, ponto e sublinhado
 * 
 */
export class TikTok extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9._]{2,24}$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?tiktok\.com\/@([a-zA-Z0-9._]{2,24})\/?$/;
  protected _urlBase: string = 'https://tiktok.com/@';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}
