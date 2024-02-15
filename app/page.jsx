import styles from "./page.module.css";
import Post from "@/components/post/post";
import prisma from "@/prisma/prisma";
import Link from "next/link";

async function getPosts(){
  const PostsData = await prisma.post.findMany({
    where: {
      published: true
    },
    include: {
      author: {
        select: {
          name: true,
          email: true
        }
      }
    }
  })

  return PostsData;
}

export default async function Home() {
  const Posts = await getPosts();

  return (
    <main className={styles.main}>
      <h1>Posts</h1>
      <Link href="/add-post">Add Post</Link>
      {Posts.map(post => {
        return <Post key={post.id} PostId={post.id} username={post.author.name} title={post.title} content={post.content} />
      })}
    </main>
  );
}
