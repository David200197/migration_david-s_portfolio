import { GetItemMenuDTO } from "../models/GetItemMenuDTO";
import { LinkItemMenu } from "./LinkItemMenu";
import { SubmenuItemMenu } from "./SubmenuItemMenu";

export class ItemMenues {
  private readonly value: (LinkItemMenu | SubmenuItemMenu)[];

  constructor(value: GetItemMenuDTO[]) {
    this.value = this.value = value.map((item) => {
      if ("href" in item) return new LinkItemMenu(item);
      return new SubmenuItemMenu(item);
    });
  }

  getAllItems() {
    return this.value;
  }

  toLinkItem() {
    return this.value
      .map((item) => {
        if ("href" in item) return [new LinkItemMenu(item)];
        return item.submenu.map((subItem) => new LinkItemMenu(subItem));
      })
      .flat();
  }
}
