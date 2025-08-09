import { ReactNode } from "react";
import moduleCss from "./JobContainer.module.css";
import FinalCurve from "@/modules/core/assets/banners/finalCurve.svg";
type Props = { children: ReactNode };
export const JobContainer = ({ children }: Props) => (
  <>
    <div className={moduleCss.job_container_body}>{children}</div>
    <FinalCurve className={moduleCss.final_curve} />
  </>
);
