import { getService } from "@/modules/core/utils/di-utils";
import { JobContainer } from "../components/JobContainer";
import { JobsService } from "../services/jobs-service";
import { JobCard } from "../components/JobCard";

const jobs = getService(JobsService).getJobs();

export const JobSection = () => (
  <JobContainer id="jobs">
    <h1 className="text-center text-2xl">Jobs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[10px] md:mx-[30px] lg:mx-[30px] xl:mx-[160px] mt-4">
      {jobs.getData().map((job) => (
        <JobCard key={job.image} job={job} />
      ))}
    </div>
  </JobContainer>
);
