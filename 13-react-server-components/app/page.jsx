import RSCDemo from "@/components/RSCDemo.jsx";
import ClientDemo from "@/components/ClientDemo.jsx";

export default async function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo/>
      </ClientDemo>
    </main>
  );
}
