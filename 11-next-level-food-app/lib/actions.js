// All functions defined in this file are guaranteed to execute only on server-side.
// You could also define it inside any async function in any component (inside the function) 
// as shown in a comment in the function shareMeal()
"use server";

import { redirect } from "next/navigation.js";
import { saveMeal } from "./meals.js";
import { revalidatePath } from "next/cache.js";

function isValidText(text) {
  return (text && text.trim() !== "")
}

// Alternative to onSubmit, since we already are working in a React Server Component
export async function shareMeal(previousState, formData) {
  // "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  // client side validation is not enough since required tags can be changed vía HTML
  // so server side validation should always be performed

  if (
    !isValidText(meal.title) || 
    !isValidText(meal.summary) ||
    !isValidText(meal.instructions) ||
    !isValidText(meal.creator) ||
    !isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image || meal.image.size === 0 
  ) {
    // server side functions can return objects that may be accessed in client-side components
    console.log('invalid input')
    return {
      message: "Invalid input",
    }
  }

  await saveMeal(meal);
  // This function tells next.js to revalidate the cache that belongs to the given route path!
  // no nested paths get revalidated, unless you pass the "layout" parameter, and ther you also get
  // nested pages revalidated
  revalidatePath("/meals");
  redirect("/meals");
}
