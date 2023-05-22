import { asset } from "$fresh/runtime.ts";

export default function Hero() {
  return (
    <section className={"bg-green-300"}>
      <div className={"p-8 container max-w-5xl h-full mx-auto text-center"}>
        <a rel="external" href={"https://fresh.deno.dev/"} target={"_blank"}>
          <div className={"flex flex-col items-center justify-center my-4"}>
            <img
              src={asset("logo.svg")}
              width="128"
              height="128"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <h1 className={"text-3xl font-black"}>Fresh</h1>
          </div>
        </a>
        <article>
          <p className={"max-w-md mx-auto"}>
            Edit <code>./routes/index.tsx</code> and save to reload.
          </p>
          <a
            href="https://fresh.deno.dev/docs/introduction"
            target={"_blank"}
            rel="external"
            className={"underline"}
          >
            Learn Fresh
          </a>
        </article>
      </div>
    </section>
  );
}
