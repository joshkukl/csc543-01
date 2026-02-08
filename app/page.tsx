/*import Image from "next/image";*/
import Intro from "@/components/intro";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
      <Section />
      <Section />
    </main>
  );
}
