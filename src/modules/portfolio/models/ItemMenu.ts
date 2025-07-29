export type ItemMenu =
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      submenu: {
        title: string;
        href: string;
        description?: string;
      }[];
    };
