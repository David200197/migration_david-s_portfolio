import { BlogService } from "@/modules/blogs/services/blog-service";
import { BlogRedirect } from "@/modules/blogs/view/BlogRedirect";
import { getService } from "@/modules/core/utils/di-utils";
import { JobsService } from "@/modules/jobs/services/jobs-service";
import { JobSection } from "@/modules/jobs/view/JobSection";
import { PortfolioProvider } from "@/modules/portfolio/context/PortfolioContext";
import { PortfolioService } from "@/modules/portfolio/services/portfolio-service";
import { CoverPage } from "@/modules/portfolio/view/CoverPage";
import { ProfileService } from "@/modules/profile/services/profile-service";
import { PersonalInfo } from "@/modules/profile/view/PersonalInfo";

const portfolioService = getService(PortfolioService);
const profileService = getService(ProfileService);
const jobsService = getService(JobsService);
const blogService = getService(BlogService);

export default async function Home({}) {
  const title = await portfolioService.getHomePageTitles();
  const profile = await profileService.getProfile();
  const jobs = await jobsService.getJobs();
  const blogSection = await blogService.getBlogSection();
  return (
    <PortfolioProvider value={{ title }}>
      <CoverPage />
      <PersonalInfo profile={profile} />
      <JobSection jobs={jobs} />
      <BlogRedirect blogSection={blogSection} />
    </PortfolioProvider>
  );
}
