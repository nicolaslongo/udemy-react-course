// TODO: this should be improved, the client components should be deeper in the component tree
"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm.js";

export default function NewMeetup() {
  function addMeetupHandler(eneteredMeetupData) {
    console.log("enteredMeetupData: ", eneteredMeetupData)
  }
  return <>
    <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
  </>
};