import React from "react";
/*import Image from "next/image";*/
import Intro from "@/components/intro";
import Section from "@/components/section";
import AccordionUI from "@/layout/ui/accordion";

const Home: React.FC = () => {
  return (
    <main className="flex w-full flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
      <Section><Intro /></Section>
      <Section><AccordionUI /></Section>
    </main>
  );
}
export default Home;