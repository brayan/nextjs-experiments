import Image from "next/image";
import imgLogo from "@/assets/logo.png";

export default function TailwindUtilityFirstPage() {
  return (
    <div className="flex items-center p-6 max-w-sm-mx-auto bg-white rounded xl shadow-lg space-x-4 mt-12">
      <Image className="h-12 w-12" src={imgLogo} alt="Logo" />

      <div>
        <div className="text-xl font-medium text-black">
          Are you sure?
        </div>
        <p className="text-slate-500">You are about to delete a post</p>
      </div>
    </div>
  );
}
