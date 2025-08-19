"use client";

import classes from './page.module.css';
import ImagePicker from '@/components/image-picker/image-picker.jsx';
import { shareMeal } from "@/lib/actions.js";
import MealsFormSubmit from "@/components/meals/meals-form-submit.jsx"
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  // Instead of using directly shareMeal we use a hook: useFormState
  // it's some kind of man in the middle.
  const [state, formAction] = useFormState(
    // the server action that should be triggered when the form gets submitted
    shareMeal,
    // the initial state of the component / the default value. i.e. the  value that should be returned 
    // by this hook if we don't  received a response from server side function
    { message: null }    
  );

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image"></ImagePicker>
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}
