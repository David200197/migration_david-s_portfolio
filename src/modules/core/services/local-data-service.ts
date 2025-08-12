import { Injectable } from "../decorators/Injectable";
import { LocaleService } from "./locales-services";

@Injectable()
export class LocalDataService {
  constructor(private readonly localeService: LocaleService) {}

  async get<R>(nameData: string): Promise<R> {
    const response = await import(
      `@/modules/core/data/${this.localeService.lang}/${nameData}.json`
    );
    return response.default;
  }
}
