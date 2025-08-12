import { BlogRedirect } from "@/modules/blogs/view/BlogRedirect";
import { getService } from "@/modules/core/utils/di-utils";
import { JobSection } from "@/modules/jobs/view/JobSection";
import { PortfolioProvider } from "@/modules/portfolio/context/PortfolioContext";
import { PortfolioService } from "@/modules/portfolio/services/portfolio-service";
import { CoverPage } from "@/modules/portfolio/view/CoverPage";
import { ProfileService } from "@/modules/profile/services/profile-service";
import { PersonalInfo } from "@/modules/profile/view/PersonalInfo";
import { Suspense } from "react";

const portfolioService = getService(PortfolioService);
const profileService = getService(ProfileService);

export default async function Home({}) {
  const title = await portfolioService.getHomePageTitles();
  const profile = await profileService.getProfile();
  return (
    <PortfolioProvider value={{ title }}>
      <CoverPage />
      <PersonalInfo profile={profile} />
      <JobSection />
      <BlogRedirect />
    </PortfolioProvider>
  );
}
