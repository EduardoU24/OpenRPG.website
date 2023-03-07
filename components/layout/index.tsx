import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const scrolled = useScroll(50);

  const topHeader = {
    backgroundImage: `url('/header_1.png')`,
    WebkitMaskImage: 'linear-gradient(to top, transparent 33%, black 75%)',
  }
  const bottomHeader = {
    backgroundImage: `url('/header_1.png')`,
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 55%, black 70%)',
  }
 
  return (
    <>
      <Meta {...meta} />
      <div className="fixed h-screen w-full bg-gradient-to-br from-grey1 via-black to-grey1 -z-20" />
      <header
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-zinc-900 bg-black/50 backdrop-blur-sm"
            : "bg-black/20 border-zinc-900/20"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="OpenRPG logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
            <p>OpenRPG</p>
          </Link>
        </div>
      </header>
      <div className="absolute w-full h-screen top-0 bg-top bg-cover -z-40" style={topHeader}></div>
      <main className="flex w-full flex-col items-center justify-center pb-32 pt-24 min-h-screen">
        {children}
      </main>
      <div className="absolute w-full h-screen bottom-0 bg-bottom bg-cover -z-40" style={bottomHeader}></div>
      <footer className="absolute w-full bottom-0 border-t border-zinc-900/90 bg-zinc-900/80">
        <div className="px-6 py-12 mx-auto text-xs text-center text-white/90 max-w-7xl lg:px-8">
          Built with 💜 by{" "}
          <Link href="https://eduardo.cat">
            Eduardo.cat
          </Link>
        </div>
      </footer>
    </>
  );
}
