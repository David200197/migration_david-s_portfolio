import { Injectable } from "../decorators/Injectable";

@Injectable()
export class LocalesManager {
  private _lang: string = "en";

  setCurrentLocale(locale: string) {
    this._lang = locale;
  }

  get lang() {
    return this._lang;
  }
}
