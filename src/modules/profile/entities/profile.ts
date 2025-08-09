import { GetProfileResponseDTO } from "../dtos/GetProfileResponseDTO";
import { PersonalDetail } from "../../core/models/PersonalDetail";

export class Profile {
  private readonly description: string;
  private readonly links: PersonalDetail[];
  private readonly skills: PersonalDetail[];

  constructor(data: GetProfileResponseDTO) {
    this.description = data.description;
    this.links = data.links;
    this.skills = data.skills;
  }

  getDescription() {
    return this.description;
  }

  getLinks() {
    return this.links;
  }

  getSkills() {
    return this.skills;
  }
}
