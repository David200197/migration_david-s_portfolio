import { ReactNode } from "react";
import moduleCss from "./BlogContainer.module.css";

type Props = { children: ReactNode };
export const BlogContainer = ({ children }: Props) => (
  <div className={moduleCss.blog_container_body}>{children}</div>
);
