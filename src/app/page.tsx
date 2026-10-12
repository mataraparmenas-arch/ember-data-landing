import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Architecture } from "@/components/sections/Architecture";
import { Capabilities } from "@/components/sections/Capabilities";
import { Metrics } from "@/components/sections/Metrics";
import { DeveloperExperience } from "@/components/sections/DeveloperExperience";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Fully static landing page — no database, API keys, or external
 * requests are required to render any section.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Architecture />
      <Capabilities />
      <Metrics />
      <DeveloperExperience />
      <Ecosystem />
      <FinalCTA />
    </>
  );
}
