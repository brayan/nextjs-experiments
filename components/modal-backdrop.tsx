"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();
  return <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={router.back} />;
}
