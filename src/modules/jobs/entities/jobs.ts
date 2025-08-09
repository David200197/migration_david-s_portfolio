import { GetJobResponseDTO } from "../dtos/get-job-response-dto";
import { Job } from "./job";

export class Jobs {
  private readonly data: Job[];

  constructor(data: GetJobResponseDTO[]) {
    this.data = data.map((item) => new Job(item));
  }

  getData() {
    return this.data;
  }
}
