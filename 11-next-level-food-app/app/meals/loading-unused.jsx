import classes from "./loading.module.css";

// This is unused but if you change the name to loading.jsx will get used
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>
}