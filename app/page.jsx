import styles from "./page.module.css";
import Post from "@/components/post/post";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Posts</h1>
      <Post />
    </main>
  );
}
