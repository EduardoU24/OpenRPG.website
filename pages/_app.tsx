import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-body",
  style: ['normal', 'italic'],
  weight: ["300", "400", "700"],
})

const modesto = localFont({
  variable: '--font-display',
  src: [
    {
      path: '../fonts/modesto.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/modesto-condensed-bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
})

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{  }>) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-body: ${robotoCondensed.style.fontFamily};
            --font-display: ${modesto.style.fontFamily};
          }
        `}
      </style>
      <RWBProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </>
  );
}