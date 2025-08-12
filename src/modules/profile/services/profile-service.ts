import { Injectable } from "@/modules/core/decorators/Injectable";
import { Profile } from "../entities/profile";
import { LocalDataService } from "@/modules/core/services/local-data-service";
import { GetProfileResponseDTO } from "../dtos/GetProfileResponseDTO";

@Injectable()
export class ProfileService {
  constructor(private readonly localDataService: LocalDataService) {}

  async getProfile() {
    const res = await this.localDataService.get<GetProfileResponseDTO>(
      "profile"
    );
    return new Profile(res);
  }
}
