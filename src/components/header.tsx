"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { LinksHeader } from "./links-header";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <header className="w-full m-auto bg-light drop-shadow-principal">
      <div className="m-auto w-full max-w-page px-4 flex items-center justify-between h-24">
        <button className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            alt="Logo"
            src="/logo-dark.svg"
            width={174}
            height={39}
            className="w-36 md:w-56"
          />
        </button>
        <ul className="items-center gap-14 font-semibold text-dark-100/50 hidden md:flex">
          {LinksHeader.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                "cursor-pointer",
                currentPath
                  .split("/")
                  .includes(`${item.link.replace("/", "")}`) &&
                  item.link !== "/" &&
                  "border-b-2 border-principal"
              )}
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <button>Entrar</button>
      </div>
    </header>
  );
};

export default Header;
