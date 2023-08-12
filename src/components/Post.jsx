import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/bahguima.png" />
          <div className={styles.authorInfo}>
            <strong>Nárbara Guieiro</strong>
            <span>FrontEnd Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Eos facilis similique</p>
        <p>Qui voluptatem exercitationem a voluptas nesciunt ut voluptatem quia ut rerum libero qui voluptas excepturi sit itaque obcaecati. Eum sequi quasi ut consequatur repellat qui nihil voluptatem ex corporis provident a asperiores laboriosam et consequatur iusto a molestiae aspernatur.</p>
        <p><a href="">ignite/react</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}