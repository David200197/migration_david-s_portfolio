type SimpleItemMenu = {
  title: string;
  href: string;
  description?: string;
};

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
