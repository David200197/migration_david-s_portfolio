import { BlogRedirect } from "@/modules/blogs/view/BlogRedirect";
import { JobSection } from "@/modules/jobs/view/JobSection";
import { CoverPage } from "@/modules/portfolio/view/CoverPage";
import { PersonalInfo } from "@/modules/profile/view/PersonalInfo";

export default function Home() {
  return (
    <>
      <CoverPage />
      <PersonalInfo />
      <JobSection />
      <BlogRedirect />
    </>
  );
}
