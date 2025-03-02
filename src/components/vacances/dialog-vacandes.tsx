"use client";

import { useEffect } from "react";

export default function DialogVacances({
  openDialog,
  content,
  onClose,
}: {
  openDialog: boolean;
  content: string;
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
        className="fixed inset-0 z-10 bg-black bg-opacity-5"
        onClick={onClose}
      />
      <dialog
        open
        className="fixed z-20 flex flex-col bottom-20 rounded-md md:-bottom-44 md:mx-32 md:my-52 lg:my-40 lg:mx-72 lg:p-12 lg:-bottom-32"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-xs m-2 lg:text-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        ></span>

        <button className="my-2 p-3 text-white font-bold block mx-auto  bg-blue-600 rounded-xl md:my-3 lg:mb-0 lg:mt-9">
          Ver mais vagas
        </button>
      </dialog>
    </>
  );
}
