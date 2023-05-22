import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <h1 className={"p-16 text-center bg-black text-white"}>
      Hello{" "}
      <span className={"text-sky-500 font-black"}>{props.params.name}</span>
    </h1>
  );
}
