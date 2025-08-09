import { PersonalDetail } from "../../core/models/PersonalDetail";

export interface GetProfileResponseDTO {
  description: string;
  links: PersonalDetail[];
  skills: PersonalDetail[];
}
