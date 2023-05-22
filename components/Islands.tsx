import Counter from "../islands/Counter.tsx";

export default function Islands() {
  return (
    <section>
      <article className={"p-8 container max-w-5xl mx-auto text-center"}>
        <h2 className={"text-3xl uppercase"}>Counter</h2>
        <p>
          As example of islands architecture,<br />{" "}
          here is simple counter component.
        </p>
        <div className={"mt-8"}>
          <Counter start={0} />
        </div>
      </article>
    </section>
  );
}
