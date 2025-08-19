import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

// generateMetadata to add dynamic metadata vs adding static metadata!
export async function generateMetadata({ params }) {
  // params.slug is defined by my routing name
  const { slug } = await params;
  const meal = getMeal(slug)
  
  if (!meal) {
    notFound();
  }  

  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default async function MealDetailsPage({ params }) {
  // params.slug is defined by my routing name
  const { slug } = await params;
  const meal = getMeal(slug)
  if (!meal) {
    notFound();
  }
  
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        {/* This is actually dangerous, since it could receive malicious injected code */}
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}>

        </p>
      </main>
    </>
  );
}
