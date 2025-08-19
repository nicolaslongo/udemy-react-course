import { Suspense } from "react";
import styles from "./page.module.css";
import { getMeetups } from "@/lib/api.js";
import classes from "./page.module.css"

import MeetupList from "@/components/meetups/MeetupList";

async function Meetups() {
  // We can use this here because its a ReactServerComponent. Also that's why we don't need useState, useEffect, etc.
  const meetups = await getMeetups();

  return <MeetupList meetups={meetups}></MeetupList>
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>React meetups app</h1>
      <Suspense fallback={<p className={classes.loading}>Fetching meetups...</p>}>
        <Meetups/>
      </Suspense>
    </div>
  );
}
