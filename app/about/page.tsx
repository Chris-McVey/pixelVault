import type { Metadata } from "next";
import { HomeAboutDetails } from "@/components/marketing/home-about-details";
import { HomeVisitLocation, HomeVisitStorefront } from "@/components/marketing/home-visit";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name}: hours, directions, map, parking, and our story. Family-owned in Ontario, CA since ${site.foundedYear}.`,
};

const pills = [
  "Family-owned",
  "Buy, sell, trade weekends",
  "Collectors welcome",
  "All ages",
];

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About {site.name}</h1>

      <section id="visit" className="scroll-mt-24 border-b border-white/10">
        <HomeVisitStorefront />
      </section>

      <HomeVisitLocation />

      <PageHero
        id="story"
        titleHeading="h2"
        eyebrow={`Since ${site.foundedYear}`}
        title={
          <>
            Family shop on Holt,{" "}
            <span className="text-[var(--brand)]">here for the hobby</span>
          </>
        }
        subtitle={`We have been on Holt since ${site.foundedYear}. Players and collectors both shop here. We will tell you straight about labels and repros, keep trades fair, and host buy, sell, trade events so the regulars actually see each other.`}
      >
        <PillRow items={pills} />
      </PageHero>

      <HomeAboutDetails />
    </>
  );
}
