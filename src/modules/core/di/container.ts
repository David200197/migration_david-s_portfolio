import "reflect-metadata";
import { Container } from "inversify";

import { UserModule } from "@/modules/users/modules/user-module";
import { CoreModule } from "./core-module";
import { PortfolioModule } from "@/modules/portfolio/modules/portfolio-module";
import { ProfileModule } from "@/modules/profile/modules/profile-module";
import { JobsModule } from "@/modules/jobs/modules/jobs-module";

const container = new Container();
container.load(
  CoreModule,
  UserModule,
  PortfolioModule,
  ProfileModule,
  JobsModule
);
export default container;
