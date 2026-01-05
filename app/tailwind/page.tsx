import Link from "next/link";

export default function TailwindPage() {
  return (
    <main>
      <h1>Tailwind!</h1>
      <p><Link href="/tailwind/01-utility-first">Utility-First</Link></p>
      <p><Link href="/tailwind/02-colors">Colors</Link></p>
      <p><Link href="/tailwind/03-container-spacing">Container & Spacing</Link></p>
      <p><Link href="/tailwind/04-typography">Typography</Link></p>
    </main>
  );
}
