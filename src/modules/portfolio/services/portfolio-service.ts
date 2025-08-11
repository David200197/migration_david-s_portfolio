import { Injectable } from "@/modules/core/decorators/Injectable";
import { GetItemMenuDTO } from "../models/GetItemMenuDTO";
import { particlesOptions } from "./options/particles";
import { ItemMenues } from "../entities/ItemMenues";

@Injectable()
export class PortfolioService {
  getHomePageTitles() {
    return {
      big: "Hi, I am David",
      small: "I'm a Fullstack Developer",
    };
  }

  getItemMenus(): ItemMenues {
    return new ItemMenues([
      { href: "/#home", title: "HOME" },
      {
        href: "/#about_me",
        title: "ABOUT ME",
      },
      {
        href: "/#jobs",
        title: "JOBS",
      },
      { href: "/blogs", title: "BLOGS" },
      {
        title: "OTHERS",
        submenu: [
          {
            href: "/bookmarker",
            title: "Bookmarker",
            description: "Bookmark manager",
          },
          { href: "/demos", title: "Demos", description: "Various demos" },
          {
            href: "/laboratory",
            title: "Laboratory",
            description: "Experimental features and projects",
          },
        ],
      },
    ]);
  }

  getParticlesOptions() {
    return particlesOptions;
  }
}
