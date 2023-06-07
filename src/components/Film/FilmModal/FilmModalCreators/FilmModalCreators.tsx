import Link from 'next/link'
import styles from './FilmModalCreators.module.scss'
import Image from 'next/image'
import {Actor} from '@/components/Film/FilmInfo/FilmInfo'

interface FilmModalCreators {
    actor: Actor,
    inModal?: boolean,
}

const FilmModalCreator = ({actor, inModal}: FilmModalCreators) => {
    return (
        <>
            {inModal && <Link href={`/person/${actor.member.id}`} className={styles.modalCreatorsLink}>
                <div className={styles.modalCreatorsItemImg}>
                    {actor.member.imageName === null ?
                        <Image alt='Создатель'
                               width={88}
                               height={88}
                               src='https://static.thenounproject.com/png/5034901-200.png'/> :
                        <Image alt='Создатель'
                               width={88}
                               height={88}
                               src={actor.member.imageName}/>}
                </div>

                <div className={styles.modalCreatorsItemName}>
                    {actor.member.nameRU}
                </div>

                <div className={styles.modalFilmsCount}>
                    9 фильмов
                </div>
            </Link>
            }
        </>
    )
}

export default FilmModalCreator