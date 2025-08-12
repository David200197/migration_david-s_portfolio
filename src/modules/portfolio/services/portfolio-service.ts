import { Injectable } from "@/modules/core/decorators/Injectable";
import { particlesOptions } from "./options/particles";
import { ItemMenues } from "../entities/ItemMenues";
import { LocalDataService } from "@/modules/core/services/local-data-service";
import { GetItemMenuDTO } from "../models/GetItemMenuDTO";

@Injectable()
export class PortfolioService {
  constructor(private readonly localDataService: LocalDataService) {}

  async getHomePageTitles() {
    const response = await this.localDataService.get<{
      big: string;
      small: string;
    }>("page-title");

    return {
      big: response.big,
      small: response.small,
    };
  }

  async getItemMenus(): Promise<ItemMenues> {
    const itemMenu = await this.localDataService.get<GetItemMenuDTO[]>(
      "item-menu"
    );
    return new ItemMenues(itemMenu);
  }

  getParticlesOptions() {
    return particlesOptions;
  }
}
