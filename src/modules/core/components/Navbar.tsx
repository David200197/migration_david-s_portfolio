"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "../lib/utils";

export type ItemMenu = {
  title: string;
  href: string;
};

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
    <NavigationMenu className="flex w-full items-center justify-between max-w-none py-7 px-40">
      {icon && (
        <div className="flex items-center">
          <img src={icon.src} alt="navbar-icon" className="h-9 w-9" />
          {icon.title && <p className="text-2xl ml-2">{icon.title}</p>}
        </div>
      )}
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-md", "")}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
