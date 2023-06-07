import styles from './person.module.scss'

import Image from 'next/image'

import ActorFilms from '@/components/Actor/ActorFilms'
import BackButton from '@/components/UI/BackButton/BackButton'
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs'
import {useTranslations} from 'next-intl/dist/src/react-server'

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
        {next: {revalidate: 100}}
    )
    return response.json()
}

async function getActorFilms(id) {
    const response = await fetch(
        `http://localhost:12120/api/films/member/${id}`,
        {next: {revalidate: 100}}
    )
    return response.json()
}

const Actor = async ({params: {id}}: Props) => {
    const actor = await getActor(id)
    const actorFilms = await getActorFilms(id)

    // const t = useTranslations('Index')
    return (
        <div className={styles.wrapper}>
           <BackButton/>
            <div className={styles.content}>
                <div>
                    <div className={styles.img}>
                        <Image alt='Актер'
                               width={120}
                               height={144}
                               src={actor.imageName}/>
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
                <ActorFilms actorFilms={actorFilms}/>
            </div>
            <div className={styles.actorNav}>
            <Breadcrumbs title={actor.nameRU}/>
            </div>
        </div>
    )
}

export default Actor