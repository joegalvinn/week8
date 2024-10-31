import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Page</Link>
        <Link href="/new-coaster">New Coaster</Link>
      </nav>
    </div>
  );
}
