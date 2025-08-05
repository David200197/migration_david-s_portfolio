import { PersonalDetail } from "./PersonalDetail";

export interface GetProfileResponseDTO {
  description: string;
  links: PersonalDetail[];
  skills: PersonalDetail[];
}
