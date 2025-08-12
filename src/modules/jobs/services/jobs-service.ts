import { Injectable } from "@/modules/core/decorators/Injectable";
import { Jobs } from "../entities/jobs";
import { LocalDataService } from "@/modules/core/services/local-data-service";
import { GetJobsResponseDTO } from "../dtos/get-jobs-response-dto";

@Injectable()
export class JobsService {
  constructor(private readonly localDataService: LocalDataService) {}

  async getJobs(): Promise<Jobs> {
    const res = await this.localDataService.get<GetJobsResponseDTO>("jobs");
    return new Jobs(res);
  }
}
