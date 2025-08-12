import { Injectable } from "@/modules/core/decorators/Injectable";
import { BlogSection } from "../model/BlogSection";
import { LocalDataService } from "@/modules/core/services/local-data-service";

@Injectable()
export class BlogService {
  constructor(private readonly localDataService: LocalDataService) {}

  async getBlogSection(): Promise<BlogSection> {
    return await this.localDataService.get<BlogSection>("blog-section");
  }
}
