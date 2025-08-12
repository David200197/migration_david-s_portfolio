import { HttpClientAxios } from "../services/http-client-axios";
import { HttpClient } from "../models/HttpClient";
import { ErrorBoundaryInterceptor } from "../interceptors/error-boundary.interceptor";
import { ContainerModule } from "inversify";
import { CORE_DI } from "./constants";
import { ConfigService } from "../services/config-service";
import { ZodValidator } from "../services/zod-validator";
import { HttpResponseInterceptor } from "../interceptors/http-response.interceptor";
import { HttpErrorInterceptor } from "../interceptors/http-error.interceptor";
import { LocaleService } from "../services/locales-services";
import { LocalDataService } from "../services/local-data-service";

export const CoreModule = new ContainerModule((bind) => {
  bind<HttpClient>(CORE_DI.HTTP_CLIENT).to(HttpClientAxios);
  bind(CORE_DI.CONFIG_SERVICE).to(ConfigService);
  bind(ErrorBoundaryInterceptor).toSelf();
  bind(ZodValidator).toSelf();
  bind(HttpResponseInterceptor).toSelf();
  bind(HttpErrorInterceptor).toSelf();
  bind(LocaleService).toSelf();
  bind(LocalDataService).toSelf();
});
