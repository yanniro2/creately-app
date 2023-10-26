import Card from "@/components/Card";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Used from "@/components/Used";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Used />
      <Features />
      <Card />
    </>
  );
}
