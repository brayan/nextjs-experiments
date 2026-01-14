"use client";

import { useFormStatus } from "react-dom";

const buttonClass =
  "cursor-pointer rounded-sm px-8 py-3 text-xl font-montserrat text-white " +
  "shadow-[0_2px_5px_rgba(0,0,0,0.3)] " +
  "bg-gradient-to-r from-[#f9572a] to-[#ff9b05] " +
  "hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] " +
  "disabled:cursor-not-allowed disabled:bg-[#ccc] disabled:text-[#979797] " +
  "disabled:hover:from-[#ccc] disabled:hover:to-[#ccc] " +
  "disabled:focus:from-[#ccc] disabled:focus:to-[#ccc]";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className={buttonClass}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
