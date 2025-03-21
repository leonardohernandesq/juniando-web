import JobCard from "./job-card";
import IJobs from "@/models/jobs.interface";

interface JobListProps {
  jobs: IJobs[];
  openJobId: string | number | null;
  setOpenJobId: (id: string | number | null) => void;
}

export default function JobList({
  jobs,
  openJobId,
  setOpenJobId,
}: JobListProps) {
  return (
    <div className="grid grid-cols-1 px-4 gap-6 pb-20 lg:grid-cols-3 md:px-40">
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          openJobId={openJobId}
          setOpenJobId={setOpenJobId}
        />
      ))}
    </div>
  );
}
