import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

// In here fill inside an Image tells next.js that it should fill the available space
// with the image, and so it gets defined by css spacing.
// This is because we do not know image dimensions in advance (they come directly from a database, or
// an external source).
export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
