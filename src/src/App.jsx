import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Cristiano Muroni"
            content="Um homen na estrada recomeça a sua vida, a sua finalidade, a sua liberdade, que foi perdida, subtraida. E quer viver em paz , sem olhar para traz."
          />
          <Post
            author="Emanuel Muroni"
            content="Eu sou um bebezinho muito lindo e inteligente, com muita sabedoria, equilibrio e muito talentoso, serei muito abençoado em tudo que irei fazer em nome de yeahoshua, yeshua, yehova, thanks my brother"
          />
        </main>
      </div>
    </div>
  );
}
