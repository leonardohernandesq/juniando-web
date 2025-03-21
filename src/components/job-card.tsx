import Image from "next/image";
import DialogVacances from "./vacances/dialog-vacances";
import IJobs from "@/models/jobs.interface";

interface JobCardProps {
  job: IJobs;
  openJobId: string | number | null;
  setOpenJobId: (id: string | number | null) => void;
}

export default function JobCard({
  job,
  openJobId,
  setOpenJobId,
}: JobCardProps) {
  return (
    <article className="bg-white p-5 rounded-xl shadow-md">
      <div className="flex gap-x-3 pb-6 items-center">
        <Image
          src={job["image-recruiter"]}
          width={45}
          height={45}
          alt="avatar"
          className="min-w-12 min-h-12 rounded-full"
        />
        <div className="flex flex-col text-nowrap">
          <span className="font-bold text-sm">
            {job["recruiter-enterprise"]}
          </span>
          <em className="text-xs">({job.modality})</em>
        </div>
      </div>

      <h1 className="text-xl font-bold pb-3">{job.title}</h1>

      <em>{job.locality}</em>

      <div className="flex justify-between items-center pt-5">
        <span className="font-bold">{job.salary}</span>
        <button
          onClick={() => setOpenJobId(job.id)}
          className="bg-blue-dark rounded-full text-white py-1 px-3 font-bold"
        >
          Cadastre-se
        </button>
      </div>

      <DialogVacances
        openDialog={openJobId === job.id}
        job={job}
        onClose={() => setOpenJobId(null)}
      />
    </article>
  );
}
