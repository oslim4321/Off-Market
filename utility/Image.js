import Image from "next/image";

export const ImgComp = ({ src, alt, className, width, height }) => (
  <Image
    src={src}
    width={width || "400"}
    height={height || "400"}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
    alt={alt}
    className={className}
    loading="eager"
  />
);
