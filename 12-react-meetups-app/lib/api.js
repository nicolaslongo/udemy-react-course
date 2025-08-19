"use server";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ObeliscoBA2015.2.jpg/330px-ObeliscoBA2015.2.jpg",
    address: "Corrientes y 9 de Julio",
    Description: "First meetup ever! so excited"
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://dynamic-media.tacdn.com/media/photo-o/2f/af/cf/02/caption.jpg?w=700&h=500&s=1",
    address: "Brandsen 805",
    Description: "A new meetup"
  }
];

export async function getMeetups() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Database connection error');
  return DUMMY_MEETUPS;
};

export async function getMeetup(meetupId) {
  return DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
};