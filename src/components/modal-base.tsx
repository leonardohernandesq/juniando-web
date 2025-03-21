"use client";

import { ReactNode, useEffect } from "react";

export default function ModalBase({
  openDialog,
  onClose,
  children,
}: {
  openDialog: boolean;
  onClose: () => void;
  children: ReactNode;
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
        className="fixed w-screen h-screen inset-0 z-10 bg-black bg-opacity-35 overflow-auto"
        onClick={onClose}
      />
      <dialog
        open
        className="fixed top-0 h-full w-full md:max-w-4xl overflow-y-scroll z-20 flex flex-col rounded-md md:h-5/6 md:top-32 lg:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </>
  );
}
