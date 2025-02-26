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
        className="fixed z-20 flex flex-col bottom-2 rounded-md md:-bottom-32 md:my-40 md:mx-72 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-xs m-2 md:text-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        ></span>

        <button className="my-2 p-3 text-white font-bold block mx-auto  bg-blue-600 rounded-xl md:mb-0 md:mt-9">
          Ver mais vagas
        </button>
      </dialog>
    </>
  );
}
