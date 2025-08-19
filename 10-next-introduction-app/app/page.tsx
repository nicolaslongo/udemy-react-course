import Link from "next/link";

import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/header";

export default function Home() {
  console.log('Executing...')
  return (
    <main>
      <Header></Header>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
