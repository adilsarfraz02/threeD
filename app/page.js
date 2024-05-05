import Experience from "./components/Experience";

export const metadata = {
  title: "Hello World",
  description: "...",
};
 
export default function Home() {
  return (
    <main className="h-screen">
      <Experience />
    </main>
  );
}
