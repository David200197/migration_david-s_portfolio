import { GetProfileResponseDTO } from "../dtos/GetProfileResponseDTO";
import { PersonalDetail } from "./personal-detail";

export class Profile {
  private readonly description: string;
  private readonly links: PersonalDetail[];
  private readonly skills: PersonalDetail[];

  constructor(data: GetProfileResponseDTO) {
    this.description = data.description;
    this.links = data.links.map((link) => new PersonalDetail(link));
    this.skills = data.skills.map((skill) => new PersonalDetail(skill));
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
