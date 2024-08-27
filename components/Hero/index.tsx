import Section from "../shared/Section";
import { Input } from "@/components/ui/input";
export default function Hero() {
  const tags = [
    "Get Started",
    "CBHI",
    "EJOHEZA",
    "PENSION",
    "RAMA",
    "Contribution",
    "Medical Eligibility Check",
  ];
  return (
    <Section className="bg-[#d5e7f7] max-w-full max-h-[40vh] h-[40vh] justify-center flex flex-col">
      <div className="w-1/2 mx-auto flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold text-black pb-10">
          Hello, How Can We Help?
        </h1>
        <Input
          className="w-1/2 justify-center border-2 border-primary-grey"
          placeholder="Search anything you want help from RSSB"
        />
        <div className="w-1/2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-primary-blue border-2 border-secondary-blue rounded-full w-fit bg-white px-2 text-sm font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
