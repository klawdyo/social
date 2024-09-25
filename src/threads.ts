import { Social } from "./social";

/**
 * Regras:
 * - Entre 1 e 30 caracteres
 * - Somente letras, números, ponto e sublinhado
 * 
 */
export class Threads extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9._]{1,30}$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?threads\.net\/@([a-zA-Z0-9._]{1,30})\/?$/;
  protected _urlBase: string = 'https://threads.net/@';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}

