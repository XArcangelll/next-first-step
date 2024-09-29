"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ path, text }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${style.link} ${
        pathname === path ? style["active-link"] : ""
      } `}
      href={path}
    >
      {text}
    </Link>
  );
};
