"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  const getClassNameByPath = (pathUri: string) =>
    path.startsWith(pathUri) ? "text-amber-500" : undefined;

  return (
    <Link href={href} className={getClassNameByPath(href)}>{children}</Link>
  );
}
