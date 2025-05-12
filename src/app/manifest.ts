import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BeachPay",
    short_name: "BeachPay",
    description: "BeachPay - O seu aplicativo de gestão do beach tennis",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: "/images/GP.png",
        sizes: "510x648",
        type: "image/png",
      },
    ],
  };
}
