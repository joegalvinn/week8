"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oh no! Something went wrong on that page! 🙈</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
        <Link href="/new-coaster">Go Home Kid</Link>
      </body>
    </html>
  );
}
