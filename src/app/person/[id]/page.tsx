
import styles from './actor.module.scss'
import Image from 'next/image'


type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Props) {
    const product = await fetch(`http://localhost:12120/api/members/${id}`).then((res) => res.json())
    return {
        title: `${product.nameRU} (${product.nameEN}): фильмография, фото, биография. Актёр.`
    }
}

async function getActor(id) {
    const response = await fetch(
        `http://localhost:12120/api/members/${id}`,
        // {next: {revalidate: 100}}
    )
    return response.json()
}

async function getActorFilms(id) {
    const response = await fetch(
        `http://localhost:12120/api/films/member/${id}`,
        // {next: {revalidate: 100}}
    )
    return response.json()
}


const Actor = async ({params: {id}}: Props) => {

    console.log(id)

    const actor = await getActor(id)

    const actorFilms = await getActorFilms(id)

    function endingFilm(num) {
        if (num === 0) return 'фильмов'
        if (num === 1) return 'фильм'
        if (num > 1 && num < 5) return 'фильма'
        if (num > 4 && num < 21) return 'фильмов'
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.backLink}>
                <Image alt='Назад'
                       width={20}
                       height={24}
                       src='/img/left-arrow.png'/>
                <span>Назад</span>
            </div>


            <div className={styles.content}>
                <div>
                    <div className={styles.img}>
                        <Image alt='Актер'
                               width={120}
                               height={144}
                               src={`data:image/png;base64,${actor.image.base64}`}/>
                    </div>

                    <h2 className={styles.name}>{actor.nameRU}</h2>
                    <div className={styles.nation}>{actor.nameEN}</div>

                    <div className={styles.info}>
                        <p>
                            {actor.text}
                        </p>
                        <a>Развернуть</a>
                    </div>
                </div>

                <div className={styles.films}>
                    <div className={styles.filmsTitle}>
                        <h2>Полная фильмография </h2>
                        <div>{actorFilms.length} {endingFilm(actorFilms.length)}</div>
                    </div>

                    <div className={styles.items}>
                        {actorFilms.map(item =>
                            <div className={styles.item} key={item.film.id}>
                                <div className={styles.filmImg}>
                                    <Image alt='Фильм'
                                           width={80}
                                           height={122}
                                           src={`data:image/png;base64,${item.film.image.base64}`}/>
                                </div>
                                <div className={styles.filmInfo}>
                                    <div className={styles.itemWrapper}>
                                        <div>{item.film.year}</div>
                                        <div>{item.film.nameRU}</div>
                                        <div>Рейтинг Иви: {item.film.rating}</div>
                                    </div>

                                    <div className={styles.look}>
                                        <a> Смотреть </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {actorFilms.length > 7 &&
                    <div className={styles.more}>
                        <a>Ещё 10 фильмов</a>
                    </div>}
            </div>
        </div>
    )
}

export default Actor