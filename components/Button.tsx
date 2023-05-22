import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={"px-4 py-2 bg-sky-500 text-white rounded-md uppercase font-semibold border-b border-sky-700 m-2 hover:bg-sky-600 active:bg-sky-700"}
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}
