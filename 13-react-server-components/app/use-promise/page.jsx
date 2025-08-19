import fs from "node:fs/promises";
import { Suspense } from "react";

import UsePromiseDemo from "@/components/UsePromisesDemo";
import ErrorBoundary from "@/components/ErrorBoundary";


export default function UsePromisePage() {
  const promise = new Promise((resolve, reject) => setTimeout(async () => {
    const data = await fs.readFile("dummy-db.json", "utf-8");
    const users = JSON.parse(data);    
    resolve(users)
    // reject(new Error("error!"));
  }, 3000));

  return (
    <main>
      {/* This component shows an error. Obviously there are other ways of doing this */}
      <ErrorBoundary fallback={<p>Oops. Something went wrong!</p>}>
        {/* This component handles the loading state */}
        <Suspense fallback={<p>Loading. This may take a while....</p>}>
          {/* This component loads the data */}
          <UsePromiseDemo usersPromise={promise}/>
        </Suspense> 
      </ErrorBoundary>
    </main>
  );
}
