import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
}: {
  title: string;
  description: string;
  demo: ReactNode;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-md border border-zinc-900 bg-zinc-900/90 shadow-xl`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-white to-stone-300 bg-clip-text text-xl text-transparent md:text-2xl">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-200 w-3/4 mx-auto">
          <Balancer>
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </div>
  );
}
