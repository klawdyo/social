import { Social } from "./social";

/**
 * 
 * Regras:
 * - entre 3 e 100 caracteres
 * - aceita letras, números, sublinhado e pontos
 * - não pode começar ou terminar com pontos
 * - não pode ter 2 pontos seguidos
 * 
 */
export class LinkedIn extends Social {
  protected _usernameRegex: RegExp = /^[a-zA-Z0-9-]{3,100}$/
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?linkedin\.com\/in\/(.*)\/?$/;
  protected _urlBase: string = 'https://linkedin.com/in/';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}

