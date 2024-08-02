import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
export function Comment () {
    return (
        <div className={styles.comment}>
           <img src="https://avatars.githubusercontent.com/u/53710097?v=4" alt=""></img> 
           <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Cristiano Muroni</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-07-29">Cerca de 1h atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!!</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
           </div>
        </div>
    )
}