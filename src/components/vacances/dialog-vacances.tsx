"use client";

import IJobs from "@/models/jobs.interface";
import EyeFill from "../icons/eye-fill";
import ModalBase from "../modal-base";
import DetailItem from "../detail.item";
import { useBodyScroll } from "@/hooks/useBodyScroll";

export default function DialogVacances({
  openDialog,
  job,
  onClose,
}: {
  openDialog: boolean;
  job: IJobs;
  onClose: () => void;
}) {
  useBodyScroll(openDialog);

  return (
    <ModalBase onClose={onClose} openDialog={openDialog}>
      <article className="flex w-full flex-col">
        <div className="m-7 lg:m-2">
          <div className=" bg-principal py-2 px-4 rounded-full text-white w-min">
            {job.modality}
          </div>
          <div className="flex my-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <span className="bg-principal py-1 px-4 rounded-full text-white flex items-center gap-2">
                {job.views} <EyeFill />
              </span>
            </div>
            <h3 className="text-xl font-bold text-principal">
              {job.salary ? job.salary : "A Combinar"}
            </h3>
          </div>
          <div className="flex flex-col gap-2 my-4 ">
            <DetailItem title="Publicado em" content={job.createdAt} />
            <DetailItem title="Localização" content={job.locality} />
            <DetailItem title="Descrição da Vaga" content={job.description} />
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
    </ModalBase>
  );
}
