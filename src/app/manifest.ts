import type { MetadataRoute } from "next";

export default function manifetbackup(): MetadataRoute.Manifest {
  return {
    name: "BeachPay",
    short_name: "BeachPay",
    description: "BeachPay - O seu aplicativo de gestão do beach tennis",
    start_url: "/",
    display: "standalone",
    background_color: "#222f3e",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/GP.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
