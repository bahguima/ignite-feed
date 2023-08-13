import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/bahguima.png",
      name: "Barbara Guieiro",
      role: "FrontEnd Developer",
    },
    content: [
      { type: "paragraphy", content: "Eos facilis similique" },

      {
        type: "paragraphy",
        content:
          " Qui voluptatem exercitationem a voluptas nesciunt ut voluptatem quia ut rerum libero qui voluptas excepturisit itaque obcaecati. Eum sequi quasi ut consequatur repellat qui nihil voluptatem ex corporis provident.",
      },
      { type: "link", content: "ignite/react" },
    ],
    publishedAt: new Date("20223-08-12 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rstanigher.png",
      name: "Rafa Stanigher",
      role: "Ops Team Leader",
    },
    content: [
      { type: "paragraphy", content: "Eos facilis similique" },

      {
        type: "paragraphy",
        content:
          " Qui voluptatem exercitationem a voluptas nesciunt ut voluptatem quia ut rerum libero qui voluptas excepturisit itaque obcaecati. Eum sequi quasi ut consequatur repellat qui nihil voluptatem ex corporis provident.",
      },
      { type: "link", content: "ignite/react" },
    ],
    publishedAt: new Date("20223-08-11 20:00:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </div>
  );
}
