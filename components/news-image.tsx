import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function NewsImage({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  sizes = "100vw",
  priority = false,
  width = 1024,
  height = 1024,
}: Props) {
  return (
    <div className={joinClasses("flex items-center justify-center", wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={joinClasses(
          "h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain",
          imageClassName
        )}
      />
    </div>
  );
}
