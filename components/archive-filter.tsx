import Link from "next/link";

type Props = {
  baseHref: string;
  items: number[];
};

export default function ArchiveFilter({ baseHref, items }: Props) {
  return (
    <nav>
      <ul className="flex flex-wrap gap-3">
        {items.map((value) => (
          <li key={value}>
            <Link
              href={`${baseHref}/${value}`}
              className="button-secondary no-underline"
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
