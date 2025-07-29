"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "../lib/utils";
import { ItemMenu } from "@/modules/portfolio/models/ItemMenu";

type Icon = {
  src: string;
  title?: string;
};

type Props = {
  icon?: Icon;
  items: ItemMenu[];
};

export function Navbar({ items, icon }: Props) {
  return (
    <div className="flex w-full items-center justify-between py-7 px-40">
      {icon && (
        <div className="flex items-center">
          <img src={icon.src} alt="navbar-icon" className="h-9 w-9" />
          {icon.title && <p className="text-2xl ml-2">{icon.title}</p>}
        </div>
      )}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {items.map((item, index) => (
            <NavigationMenuItem key={`menu_item_${index}`}>
              {"href" in item ? (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-md bg-transparent")}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger className="bg-transparent" >{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="right-0 left-auto">
                    <ul className="grid w-[300px] gap-4">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <li key={`submenu_item_${subIndex}`}>
                          <NavigationMenuLink asChild>
                            <Link href={submenuItem.href}>
                              <div className="font-medium">
                                {submenuItem.title}
                              </div>
                              {submenuItem.description && (
                                <div className="text-sm text-muted-foreground">
                                  {submenuItem.description}
                                </div>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
