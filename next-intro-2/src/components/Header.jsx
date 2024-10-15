import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts/1">page 1</Link>
      </nav>
    </>
  );
}
