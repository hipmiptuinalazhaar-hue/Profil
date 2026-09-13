"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./photo-slot.module.css";

type PhotoSlotProps = {
  src: string;
  alt: string;
  filename: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function PhotoSlot({
  src,
  alt,
  filename,
  className,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
}: PhotoSlotProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ""}`}
      data-loaded={loaded ? "true" : "false"}
    >
      <div className={styles.fallback} aria-hidden={loaded}>
        <span>PHOTO ASSET</span>
        <strong>{filename}</strong>
        <small>Upload ke public/photos</small>
      </div>

      <Image
        className={styles.image}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{ objectFit: "cover", objectPosition }}
      />
    </div>
  );
}
