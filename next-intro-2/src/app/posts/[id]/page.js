import Link from "next/link";
// /app/posts/[id]/page.jsx
export default function PostPage({ params }) {
  console.log(params); // Output: { id: 1 }
  return <h1>Post Page {params.id}</h1>; // Output: Post Page 1
}
