import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <section
      className={"w-full h-screen bg-black text-white flex items-center justify-center"}
    >
      <h1 className={"text-4xl text-center animate-appear"}>
        Hi{" "}
        <span className={"text-sky-500 font-black capitalize"}>
          {props.params.name}
        </span>,<br />it's so nice to meet you.
      </h1>
    </section>
  );
}
