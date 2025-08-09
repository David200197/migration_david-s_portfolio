import InitialCurve from "@/modules/core/assets/banners/initialCurve.svg";
import FinalCurve from "@/modules/core/assets/banners/finalCurve.svg";
import { ReactNode } from "react";
import className from "./ProfileContainer.module.css";

type Props = { children: ReactNode };

export const ProfileContainer = ({ children }: Props) => (
  <>
    <InitialCurve />
    <div className={className.profile_container_body}>{children}</div>
    <FinalCurve className={className.final_curve} />
  </>
);
