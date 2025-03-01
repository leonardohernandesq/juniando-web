"use client";

import Image from "next/image";
import DialogVacances from "./dialog-vacandes";
import { useState } from "react";
import IJobs from "@/models/jobs.interface";

export default function ArticleVacances({ jobs }: { jobs: IJobs[] }) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 px-4 gap-6 pb-20 lg:grid-cols-3 md:px-40">
      {jobs.map((job) => {
        return (
          <article key={job.id} className="bg-white p-5 rounded-xl shadow-md">
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
                onClick={() => setOpenDialog(!openDialog)}
                className="bg-blue-dark rounded-full text-white py-1 px-3 font-bold"
              >
                Cadastre-se
              </button>
            </div>
            <DialogVacances
              openDialog={openDialog}
              content={job.description}
              onClose={() => setOpenDialog(!openDialog)}
            />
          </article>
        );
      })}
    </div>
  );
}
