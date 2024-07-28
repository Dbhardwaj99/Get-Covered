import Image from "next/image";
import LocalNavbar from "../components/navbar";
import Hero from "@/components/hero";
import { StarsBackground } from '@/components/ui/stars-background';

export default function Home() {
  return (
    <section>
      <LocalNavbar />
      <Hero />
      <StarsBackground />
    </section>
  );
}
