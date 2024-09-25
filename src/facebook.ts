import { Social } from "./social";

/**
 * 
 * Regras:
 * - entre 1 e 30 caracteres
 * - aceita letras, números, sublinhado e pontos
 * - não pode começar ou terminar com pontos
 * - não pode ter 2 pontos seguidos
 * 
 */
export class Facebook extends Social {
  protected _usernameRegex: RegExp = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
  protected _urlRegex: RegExp = /^https:\/\/(www\.)?facebook\.com\/([^/?#]+)$/;
  protected _urlBase: string = 'https://facebook.com/';

  constructor(input: string) {
    super(input)
    this.parseUsername()
  }
}


