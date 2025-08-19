// We want client components to be rendered as far down into the component tree as possible
"use client";

import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"

import Link from "next/link";

export default function NavLink({href, children}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  )
}