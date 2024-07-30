import LocalNavbar from "../components/navbar";
import Hero from "@/components/hero";
import { StarsBackground } from '@/components/ui/stars-background';

export default function Home() {
  return (
    <section>
      {/* <StarsBackground /> */}
      <LocalNavbar />
      <Hero />
    </section>
  );
}
