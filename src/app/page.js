export default function Home() {
  const cssRootExample = `:root {
      --berry-blue: #79CBE3;
      --navy-dark: #00151f;
  }`;
  const generatedTailwindConfigObject = undefined;

  return (
    <div className="flex justify-center flex-col p-4">
      <h1 className="text-4xl text-center">
        Get your vanilla CSS color variables into TailwindCSS
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 my-8">
        <textarea
          placeholder={cssRootExample}
          className="border shadow-md rounded py-1 px-2 placeholder:text-zinc-400 min-h-[120px]"
        />
        <button className="group lg:h-10 items-center bg-berryBlue transition-colors flex gap-2 w-fit mx-auto px-3 rounded py-1 hover:bg-berryBlue/80">
          CONVERT
          <span className="lg:-rotate-90 lg:group-hover:rotate-270 group-hover:rotate-360 transition-transform duration-500">
            ↓
          </span>
        </button>
        <div
          contentEditable={generatedTailwindConfigObject}
          className="border rounded shadow-md py-1 px-2 min-h-[120px] relative text-black"
        >
          <button className="absolute rounded border border-zinc-200 px-2 py-1 hover:bg-zinc-200 hover:border-zinc-400 transition-colors bottom-2 right-3">
            Copy result
          </button>
        </div>
      </div>
      <main className="flex flex-col gap-10 max-w-prose mx-auto">
        <article className="flex flex-col gap-6">
          <h2 className="text-center text-3xl">What does this site do?</h2>
          <section>
            <p>
              It receives a{" "}
              <span className="font-mono bg-zinc-200 rounded px-1">:root</span>{" "}
              CSS object and converts it into a copy-pasteable JavaScript object
              you can plug into{" "}
              <span className="font-mono bg-zinc-200 rounded px-1">
                tailwind.config.js
              </span>
              . This allows you to access your color variables in any
              TailwindCSS project.
            </p>
          </section>
        </article>
        <article className="flex-col flex gap-6">
          <h2 className="text-center text-3xl">
            I have copied the result. Now what?
          </h2>
          <section className="flex flex-col gap-2">
            <p className="font-semibold text-lg">
              If you want to use the colors generated above AND
              TailwindCSS&apos; default colors
            </p>
            <p>
              Add the generated object to{" "}
              <span className="bg-zinc-200 rounded px-1">
                theme.extend.colors
              </span>{" "}
              on your{" "}
              <span className="bg-zinc-200 rounded px-1">
                tailwind.config.js
              </span>
              . This means you can use all your colors, as well as
              TailwindCSS&apos; default theme. This is the recommended option.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <p className="font-semibold text-lg">
              If you want to use STRICTLY the colors I generated above
            </p>
            <p>
              Add the generated object to the{" "}
              <span className="bg-zinc-200 rounded px-1">theme.colors</span> on
              your{" "}
              <span className="bg-zinc-200 rounded px-1">
                tailwind.config.js
              </span>
              . This will override TailwindCSS&apos; default theme. You will
              lose access utilities such as{" "}
              <span className="bg-zinc-200 rounded px-1">text-gray-900</span>{" "}
              and{" "}
              <span className="bg-zinc-200 rounded px-1">bg-transparent</span>.
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
      <footer className="text-center pt-6 border-t border-zinc-300 mt-8">
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
