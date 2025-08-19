import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css"
import { getMeals } from "@/lib/meals.js";

import MealsGrid from "@/components/meals/meals-grid.jsx";

// metadata redefined for this page
export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
  // We can use this here because its a ReactServerComponent. Also that's why we don't need useState, useEffect, etc.
  const meals = await getMeals();

  return <MealsGrid meals={meals}/>
};

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p> 
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* Suspense is a React component that allows you to handle loading states and show fallback content until data is available 
            this is basically what loading.jsx uses in default next.js, this is how we use it manually */}
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
}
