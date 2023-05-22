import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div className={"text-center"}>
      <p>{count}</p>
      <Button onClick={() => setCount((p) => p - 1)}>-</Button>
      <Button onClick={() => setCount((p) => p + 1)}>+</Button>
    </div>
  );
}
