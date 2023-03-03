import Card from "@/components/home/card";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { GithubIcon, TwitterIcon } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="py-4 text-5xl font-bold tracking-tight text-center font-display text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-8xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          OpenRPG
        </motion.h1>
        <motion.p
          className="tracking-tight text-center font-display text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/80 to-white font-bold text-3xl uppercase drop-shadow-txt2"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          an opinionated set of <span className="text-red-600 drop-shadow-txt2">free</span> tools
          to play TTRPGs
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/OpenRPGApps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <p>Check the GitHub</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            href="https://twitter.com/EduardoU24/status/1631142434804514820"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Any Questions?
            </p>
          </a>
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </Layout>
  );
}

const features = [
  {
    title: "Feature 1",
    description:
      "TBD",
    demo: <WebVitals />,
  },
  {
    title: "Feature 2",
    description:
      "TBD",
    demo: (
      <a>
      </a>
    ),
  },
  {
    title: "Feature 3",
    description:
      "TBD",
    demo: (
      <div className="flex items-center justify-center space-x-20">
      </div>
    ),
  },
];
