import React from 'react'

import style from './CreatorsItem.module.scss'
import Image from 'next/image'

type CreatorsItemProps = {
    inModal?: any
}

const CreatorsItem: React.FC<CreatorsItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={style.modalCreatorsItem}>
                    <div className={style.modalCreatorsItemImg}>
                        <Image
                            alt='Создатель'
                            width={128}
                            height={128}
                            src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85'
                        />
                    </div>

                    <div className={style.modalCreatorsItemName}>
                        Оливье
                    </div>
                    <div className={style.modalCreatorsItemName}>
                        Накаш
                    </div>
                    <div className={style.modalFilmsCount}>
                        9 фильмов
                    </div>
                </div>

                :

                <div>
                    <div className={style.creatorsItem}>
                        <Image
                            alt='Создатель'
                            width={88}
                            height={88}
                            src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85'
                        />
                        <div className={style.creatorsItemName}>
                            Оливье
                        </div>
                        <div className={style.creatorsItemName}>
                            Накаш
                        </div>
                        <div className={style.creatorsItemJob}>
                            режиссёр
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CreatorsItem