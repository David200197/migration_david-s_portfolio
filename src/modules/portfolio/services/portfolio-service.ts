import { Injectable } from "@/modules/core/decorators/Injectable";
import { ItemMenu } from "../models/ItemMenu";

@Injectable()
export class PortfolioService {
  getItemMenus(): ItemMenu[] {
    return [
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
    ];
  }
}
