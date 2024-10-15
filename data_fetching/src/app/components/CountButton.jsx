"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked my button {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
