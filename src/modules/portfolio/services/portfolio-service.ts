import { ItemMenu } from "@/modules/core/components/Navbar";
import { Injectable } from "@/modules/core/decorators/Injectable";

@Injectable()
export class PortfolioService {
  getItemMenus(): ItemMenu[] {
    return [
      { href: "/#home", title: "HOME" },
      { href: "/#about_me", title: "ABOUT ME" },
      { href: "/#jobs", title: "JOBS" },
      { href: "/blogs", title: "BLOGS" },
    ];
  }
}
