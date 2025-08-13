import { Injectable } from "@/modules/core/decorators/Injectable";
import { BlogSection } from "../model/BlogSection";
import { LocalRepository } from "@/modules/core/services/local-respository";

@Injectable()
export class BlogService {
  constructor(private readonly localRepository: LocalRepository) {}

  async getBlogSection(): Promise<BlogSection> {
    return await this.localRepository.get<BlogSection>("blog-section");
  }
}
