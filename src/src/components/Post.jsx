import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post({author, publishedAt}) { 
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,

  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
          <strong> {author.name}</strong>
          <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="2022-07-29">  
          {publishedDateRelativeToNow }        
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻{" "}
        </p>
        <p> Acesse e deixe seu feedback</p>
        <p>
          {""}
          <a href="#">devonlane.design</a>
        </p>
        <p>
          <a href="#">#uiux #userexperience</a>
          {""}
          <a href="#">#uiux #userexperience</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
