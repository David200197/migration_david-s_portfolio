import { Injectable } from "../decorators/Injectable";
import { LocalesManager } from "./locales-manager";

@Injectable()
export class LocalRepository {
  constructor(private readonly localesManager: LocalesManager) {}

  async get<R>(nameData: string): Promise<R> {
    const response = await import(
      `@/modules/core/data/${this.localesManager.lang}/${nameData}.json`
    );
    return response.default;
  }
}
