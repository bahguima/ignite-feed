import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bárbara Guieiro"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
          />
        </main>
      </div>
    </div>
  );
}
