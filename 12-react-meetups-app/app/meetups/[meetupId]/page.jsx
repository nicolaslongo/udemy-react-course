import Image from "next/image";
import classes from './page.module.css';
import { getMeetup } from "@/lib/api";

export default async function MeetupDetails({params}) {
  const { meetupId } = await params;
  console.log('meetupId is', meetupId)
  const meetUp = await getMeetup(meetupId)
  console.log('meetUp is', meetUp)

  if (!meetUp) {
    notFound();
  }

  return <>
    <section className={classes.detail}>
      <Image src={meetUp.image} alt={meetUp.title} width={700} height={500}/>
      <h1>{meetUp.title}</h1>
      <address>{meetUp.address}</address>
      <p>Some description</p>
    </section>
  </>
};