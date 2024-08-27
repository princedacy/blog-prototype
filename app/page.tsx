import Hero from "@/components/Hero";
import Blogs from "./blog/page";

export default function Home() {
  return (
    <div className="relative top-[104px]">
      <Hero />
      <Blogs />
    </div>
  );
}
