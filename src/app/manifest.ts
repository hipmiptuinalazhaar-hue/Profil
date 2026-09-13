import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HIPMI PT UIN Al Azhaar Lubuklinggau",
    short_name: "HIPMI PT",
    description: "Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau.",
    start_url: "/",
    display: "standalone",
    background_color: "#02070c",
    theme_color: "#07111f",
  };
}
