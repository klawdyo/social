export abstract class Social {
  protected abstract _usernameRegex: RegExp;
  protected abstract _urlRegex: RegExp;
  protected abstract _urlBase: string;

  protected _value?: string;

  constructor(protected _input: string) { }

  getUrl(): string {
    return `${this._urlBase}${this._value}`
  }

  toString(): string {
    return this._value!
  }

  protected parseUsername() {
    const matchUrl = this._input.match(this._urlRegex)
    let username = matchUrl?.at(2) || this._input;

    if (this._usernameRegex.test(username)) this._value = username;
    else throw new Error('Dados inválidos');
  }
}
