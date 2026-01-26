import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import Image from "next/image";
import NavLink from "./nav-link";

export default function MealsHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-8 md:px-[10%]">
      <Link href="/" className="flex items-center justify-center gap-8 no-underline text-2xl font-bold uppercase tracking-[0.15rem] text-[#595959]">
        <Image
          className="w-20 h20 object-contain filter-[drop-shadow(0_0_0.75rem_rgba(0,0,0,0.5))]"
          src={logoImg}
          alt="A plate with food on it"
          priority
        />
        Next.js Experiments
      </Link>

      <nav className="">
        <ul className="flex list-none m-0 p-0 gap-6 text-xl">
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
          <li>
            <NavLink href="/tailwind">Tailwind</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
