"use client";

import IJobs from "@/models/jobs.interface";
import { useEffect } from "react";
import EyeFill from "../icons/eye-fill";
import Image from "next/image";

export default function DialogVacances({
  openDialog,
  job,
  onClose,
}: {
  openDialog: boolean;
  job: IJobs;
  onClose: () => void;
}) {
  useEffect(() => {
    if (openDialog) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.add("overflow-auto");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openDialog]);

  if (!openDialog) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-black bg-opacity-5 overflow-auto"
        onClick={onClose}
      />
      <dialog
        open
        className="fixed h-full overflow-y-scroll z-20 flex flex-col bottom-0 rounded-md md:h-5/6 md:-bottom-44 md:mx-32 md:my-52 lg:my-40 lg:mx-72 lg:p-12 lg:-bottom-32"
        onClick={(e) => e.stopPropagation()}
      >
        <article className="flex w-full flex-col">
          <div className="relative">
            <Image
              src={job.logo}
              alt={job.title}
              height={400}
              width={800}
              className="rounded-lg"
            />
            <Image
              src={job.author.avatar}
              alt={job.author.name}
              title={job.author.name}
              height={50}
              width={50}
              className="rounded-full absolute left-5 top-5 cursor-pointer"
            />
            <span className="flex"></span>

            <span className="absolute bottom-5 right-5 z-50 bg-principal py-2 px-4 rounded-full text-white">
              {job.modality}
            </span>
            <span className="absolute bottom-5 left-5 z-50 bg-principal py-2 px-4 rounded-full text-white flex items-center gap-2">
              {job.views} <EyeFill />
            </span>
          </div>
          <div className="m-7 lg:m-2">
            <div className="flex my-4 items-center justify-between">
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <h3 className="text-lg">
                {job.salary ? job.salary : "A Combinar"}
              </h3>
            </div>
            <div className="flex flex-col gap-2 my-4 ">
              <p>
                <span className="text-sm font-bold">Publicado em:</span>{" "}
                {job.createdAt}
              </p>
              <p>
                <span className="text-sm font-bold">Localização:</span>{" "}
                {job.locality}
              </p>
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
              <div className="flex flex-wrap gap-2 text-white mt-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index + tag}
                    className="bg-principal py-2 px-4 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full my-2 p-3 text-white font-bold block bg-blue-600 rounded-xl md:my-3 lg:mb-0 lg:mt-9">
              Ver mais vagas
            </button>
          </div>
        </article>
      </dialog>
    </>
  );
}
