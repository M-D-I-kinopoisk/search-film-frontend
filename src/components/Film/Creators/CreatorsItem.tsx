import React from 'react'

import styles from './Creators.module.scss'
import Image from 'next/image'

type CreatorsItemProps = {
    inModal?: any
}

const CreatorsItem: React.FC<CreatorsItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={styles.modalCreatorsItem}>
                    <div className={styles.modalCreatorsItemImg}>
                        <Image alt='Создатель'
                            width={128}
                            height={128}
                            src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85' />
                    </div>

                    <div className={styles.modalCreatorsItemName}>
                        Оливье
                    </div>

                    <div className={styles.modalCreatorsItemName}>
                        Накаш
                    </div>

                    <div className={styles.modalFilmsCount}>
                        9 фильмов
                    </div>
                </div>
                :
                <div className={styles.creatorsItem}>
                    <Image alt='Создатель'
                        width={88}
                        height={88}
                        src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85'/>
                    
                    <div className={styles.creatorsItemName}>
                        Оливье
                    </div>

                    <div className={styles.creatorsItemName}>
                        Накаш
                    </div>

                    <div className={styles.creatorsItemJob}>
                        режиссёр
                    </div>
                </div>
            }
        </>
    )
}

export default CreatorsItem