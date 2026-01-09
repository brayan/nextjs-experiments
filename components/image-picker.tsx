"use client";

import { useRef, useState } from "react";

type ImagePickerProps = {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const inputId = `image-${name}`;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const result = fileReader.result;
      setPickedImage(typeof result === "string" ? result : null);
    };

    fileReader.readAsDataURL(file);
  };

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-base font-bold uppercase text-[#b3aea5]"
      >
        {label}
      </label>

      <div className="mb-4 flex items-start gap-6">
        <div className="relative flex h-40 w-40 items-center justify-center border-2 border-[#a4abb9] text-center text-[#a4abb9]">
          {!pickedImage ? (
            <p className="m-0 p-4">No image picked yet.</p>
          ) : (
            <img
              src={pickedImage}
              alt="Selected image preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>

        <div>
          <input
            ref={imageInputRef}
            onChange={handleImageChange}
            className="hidden"
            type="file"
            id={inputId}
            name={name}
            accept="image/png, image/jpeg"
            required
          />

          <button
            type="button"
            className="cursor-pointer rounded-sm bg-[#a4abb9] px-6 py-2 hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </div>
  );
}
