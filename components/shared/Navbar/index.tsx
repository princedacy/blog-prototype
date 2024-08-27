import { useRouter } from "next/navigation";
import Section from "../Section";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Navbar() {
  const { push } = useRouter();
  return (
    <nav className="w-full py-8 fixed top-0 z-50 h-[104px] bg-primary-alternate">
      <Section className="mx-auto flex flex-row justify-between items-center">
        <div>
          <p
            className="text-6xl font-bold cursor-pointer"
            onClick={() => push("/")}
          >
            Blog.
          </p>
        </div>
        <div className="flex flex-row items-center gap-8">
          <Link className="text-sm text-primary-purple underline" href={"/"}>
            Submit Ticket
          </Link>
          <LanguageSwitcher />
        </div>
      </Section>
    </nav>
  );
}
