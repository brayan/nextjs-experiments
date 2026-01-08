import Link from "next/link";

export default function TailwindPage() {
  return (
    <main>
      <h1>Tailwind!</h1>
      <p><Link href="/tailwind/01-utility-first">01 - Utility-First</Link></p>
      <p><Link href="/tailwind/02-colors">02 - Colors</Link></p>
      <p><Link href="/tailwind/03-container-spacing">03 - Container & Spacing</Link></p>
      <p><Link href="/tailwind/04-typography">04 - Typography</Link></p>
      <p><Link href="/tailwind/05-sizing">05 - Sizing</Link></p>
      <p><Link href="/tailwind/06-layout-position">06 - Layout & Position</Link></p>
    </main>
  );
}
