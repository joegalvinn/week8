"use client";

import { useState } from "react";

export default function Counter() {
  function MyComponent() {
    // the error always throws because we're deliberately causing a problem
    // maybe we didn't get a param and this page will not work without it
    throw new Error("I deliberately broke this page, because I'm a bad person");
    return <div>My page content</div>;
  }
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked my button {count} times!</p>
      {/* <MyComponent /> */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
