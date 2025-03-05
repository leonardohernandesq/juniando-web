"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface IFooterLink {
  children: string;
  href: string;
}

interface IFooterMenu {
  title: string;
  links: IFooterLink[];
}

const FooterMenu = ({ title, links }: IFooterMenu) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="h-two-pixels rounded-full w-8 bg-white mt-1 mb-4"></div>
      <ul>
        {links.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              router.push(`/posts?filter=${item.href.toLowerCase()}`)
            }
          >
            <Link
              className="hover:text-zinc-300"
              href={item.href}
              title={item.children}
            >
              {item.children}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
