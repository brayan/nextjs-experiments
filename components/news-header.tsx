import Link from "next/link";

export default function NewsHeader() {
  return (
    <header className="mx-auto mb-8 flex w-[90%] max-w-[60rem] items-center justify-between">
      <div className="rounded font-[Inter] text-2xl">
        <Link href="/" className="text-[#e1e1d7] no-underline">
          NextNews
        </Link>
      </div>

      <nav>
        <ul className="flex gap-8 font-bold">
          <li>
            <Link
              href="/news"
              className="rounded px-4 py-2 text-[#e5e5e1] no-underline hover:bg-[#bcbcb7] hover:text-[#181817]"
            >
              News
            </Link>
            <Link
              href="/archive"
              className="rounded px-4 py-2 text-[#e5e5e1] no-underline hover:bg-[#bcbcb7] hover:text-[#181817]"
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
