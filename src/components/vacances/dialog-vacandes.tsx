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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
        className="p-12 fixed z-20 my-40 mx-72 rounded-md -bottom-44"
        onClick={(e) => e.stopPropagation()}
      >
        <span dangerouslySetInnerHTML={{ __html: content }}></span>

        <button className="p-3 text-white font-bold block mx-auto mt-9 bg-blue-600 rounded-xl">
          Ver mais vagas
        </button>
      </dialog>
    </>
  );
}
