export async function generateMetadata({ params }) {
  const result = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await result.json();
  return {
    title: `Item - ${data.title}`,
    description: `${data.description}`,
  };
}

export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <a href={"/posts"}>Go back</a>
    </div>
  );
}
