import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beach Pay - Gerenciamento de Investmentos Beach Tennis",
    short_name: "Beach Pay",
    start_url: "/",
    display: "standalone",
    background_color: "#222f3e",
    theme_color: "#222f3e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/x-icon",
      },
      {
        src: "/images/GP.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
