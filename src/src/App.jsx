import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
//author: {avatar_url: "", name:"", role:""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/53710097?v=4',
      name: 'Diego Fernandes',
      role: 'Chatbot Developer' 
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio. criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback'},
      {type: 'link', content: 'devonlane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://as2.ftcdn.net/v2/jpg/05/53/87/35/1000_F_553873591_NV0hy2pJTzkgxAsUV1sfEvOpD0RuwDy1.jpg',
      name: 'Marye Blide',
      role: 'UX Design' 
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio. criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback'},
      {type: 'link', content: 'devonlane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-04 20:36:00'),
  },

];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
        )
        })}
        </main>
      </div>
    </div>
  );
}
