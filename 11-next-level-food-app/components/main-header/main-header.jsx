import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background.jsx";
import NavLink from "./nav-link.jsx";

export default function MainHeader() {
  return <>
    <MainHeaderBackground/>
    <header className={classes.header}>
      
      <Link className={classes.logo} href="/">
        <Image src={logoImage} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
}