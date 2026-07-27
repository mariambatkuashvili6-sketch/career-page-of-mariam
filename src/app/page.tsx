import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Experience } from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { VideoIntro } from "@/components/sections/VideoIntro";
import { Skills } from "@/components/sections/Skills";
import { Values } from "@/components/sections/Values";
import { WhyIGaming } from "@/components/sections/WhyIGaming";
import { Learning } from "@/components/sections/Learning";
import { Goals } from "@/components/sections/Goals";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <Certificates />
      <VideoIntro />
      <Skills />
      <Values />
      <WhyIGaming />
      <Learning />
      <Goals />
      <Contact />
    </>
  );
}
