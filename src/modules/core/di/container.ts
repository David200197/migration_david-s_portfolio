import "reflect-metadata";
import { Container } from "inversify";

import { UserModule } from "@/modules/users/modules/user-module";
import { CoreModule } from "./core-module";
import { PortfolioModule } from "@/modules/portfolio/modules/portfolio-module";

const container = new Container();
container.load(CoreModule, UserModule, PortfolioModule);
export default container;
