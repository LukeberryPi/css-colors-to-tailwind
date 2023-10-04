"use client";
import { useState } from "react";
import { convertCssToJs } from "@/convert";
import { copyToClipboard } from "@/clipboard";

export default function Home() {
  const [cssRoot, setCssRoot] = useState("");
  const [tailwindConfigObject, setTailwindConfigObject] = useState("");

  const onConvertClick = () => {
    setTailwindConfigObject(convertCssToJs(cssRoot));
  };

  const cssRootExample = `:root {
      --berry-blue: #79CBE3;
      --other-color: #000000;
  }`;

  const handleTextAreaChange = (event) => {
    setCssRoot(event.target.value);
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-4xl">
        Get your vanilla CSS color variables into TailwindCSS
      </h1>
      <div className="xs:w-[400px] my-8 flex w-[326px] flex-col justify-center gap-8 sm:w-[640px]">
        <textarea
          value={cssRoot}
          onChange={handleTextAreaChange}
          placeholder={cssRootExample}
          className="h-fit min-h-[120px] w-full rounded border px-2 py-1 shadow-md placeholder:text-zinc-400"
        />
        <button
          onClick={onConvertClick}
          className="group mx-auto flex w-fit items-center gap-2 rounded bg-berryBlue px-3 py-1 ring-1 ring-zinc-300 transition-all hover:ring-zinc-600 active:translate-y-1 lg:h-10"
        >
          CONVERT
        </button>
        <div className="relative min-h-[120px] w-full rounded border px-2 py-1 text-black shadow-md">
          {tailwindConfigObject.toString()}
          <button onClick={() => copyToClipboard(tailwindConfigObject)} className="absolute bottom-2 right-2 rounded border border-zinc-200 px-2 py-1 transition-all hover:border-zinc-400 hover:bg-zinc-200 active:translate-y-1">
            Copy result
          </button>
        </div>
      </div>
      <main className="mx-auto flex max-w-prose flex-col gap-10">
        <article className="flex flex-col gap-6">
          <h2 className="text-center text-3xl">What does this site do?</h2>
          <section>
            <p>
              It receives a{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">:root</span>{" "}
              CSS object and converts it into a copy-pasteable JavaScript object
              you can plug into{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                tailwind.config.js
              </span>
              . This allows you to access your color variables in any
              TailwindCSS project.
            </p>
          </section>
        </article>
        <article className="flex flex-col gap-6">
          <h2 className="text-center text-3xl">
            I have copied the result. Now what?
          </h2>
          <section className="flex flex-col gap-2">
            <p className="text-lg font-semibold">
              If you want to use the colors generated above AND
              TailwindCSS&apos; default colors
            </p>
            <p>
              Add the generated object to{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                theme.extend.colors
              </span>{" "}
              on your{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                tailwind.config.js
              </span>
              . This means you can use all your colors, as well as
              TailwindCSS&apos; default theme. This is the recommended option.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-lg font-semibold">
              If you want to use STRICTLY the colors generated above
            </p>
            <p>
              Add the generated object to the{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                theme.colors
              </span>{" "}
              on your{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                tailwind.config.js
              </span>
              . This will override TailwindCSS&apos; default theme. You will
              lose access utilities such as{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                text-gray-900
              </span>{" "}
              and{" "}
              <span className="rounded bg-zinc-200 px-1 font-mono">
                bg-transparent
              </span>
              .
            </p>
          </section>
          <p>
            You can learn more by visiting{" "}
            <a
              className="underline underline-offset-2"
              href="https://tailwindcss.com/docs/theme#customizing-the-default-theme"
            >
              TailwindCSS&apos; documentation
            </a>
            .
          </p>
        </article>
      </main>
      <footer className="mt-8 border-t border-zinc-300 py-4 text-center">
        Created by{" "}
        <a
          className="underline underline-offset-2"
          href="https://x.com/LukeberryPi"
        >
          @LukeberryPi
        </a>{" "}
        <br />
        @2023
      </footer>
    </div>
  );
}
