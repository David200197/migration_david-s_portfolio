import { PersonalDetail } from "@/modules/core/models/PersonalDetail";
import { GetJobResponseDTO } from "../dtos/get-job-response-dto";

export class Job {
  alt: string;
  logoSrc: string;
  description: string;
  time: string;
  image: string;
  title: string;
  skills: PersonalDetail[];
  type: string;
  link?: string;

  constructor(data: GetJobResponseDTO) {
    this.alt = data.alt;
    this.logoSrc = data.logoSrc;
    this.description = data.description;
    this.time = data.time;
    this.image = data.image;
    this.title = data.title;
    this.skills = data.skills;
    this.type = data.type;
    this.link = data.link;
  }

  isPublic() {
    return Boolean(this.link);
  }

  isPrivate() {
    return !this.isPublic();
  }
}
