import { ReactNode } from "react";
import moduleCss from "./JobContainer.module.css";
import { cn } from "@/modules/core/lib/utils";

type Props = { children: ReactNode };
export const JobContainer = ({ children }: Props) => (
  <div className={cn(moduleCss.job_container_body)}>{children}</div>
);
