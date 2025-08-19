import Card from '../ui/Card';
import Link from 'next/link';
import classes from './MeetupItem.module.css';

function propsItem({id, image, title, address}) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/meetups/${id}`}>Show Details</Link>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default propsItem;
