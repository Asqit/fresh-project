import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <section className={"bg-green-300 h-screen"}>
      <article className={"p-8 container max-w-5xl h-full mx-auto text-center"}>
        <div>
          <div className={"flex flex-col items-center justify-center my-4"}>
            <img
              src="/logo.svg"
              width="128"
              height="128"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <h1 className={"text-3xl font-black"}>Fresh</h1>
          </div>
          <p className={"max-w-md mx-auto"}>
            Welcome to <b>fresh</b>. Try updating this message in the
            <code className={"text-sm"}>
              ./routes/index.tsx
            </code>{" "}
            file, and refresh.
          </p>
          <Counter start={3} />
        </div>
      </article>
    </section>
  );
}
