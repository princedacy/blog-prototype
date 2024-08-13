import { useRouter } from "next/navigation";
export default function Navbar() {
  const { push } = useRouter();
  return (
    <section className="w-full lg:w-2/3 mx-auto flex flex-row justify-between py-8">
      <div>
        <p
          className="text-6xl font-bold cursor-pointer"
          onClick={() => push("/")}
        >
          Blog.
        </p>
      </div>
      <div>
        <span className="text-lg">NextJs & Strapi Blog Prototype</span>
      </div>
    </section>
  );
}
