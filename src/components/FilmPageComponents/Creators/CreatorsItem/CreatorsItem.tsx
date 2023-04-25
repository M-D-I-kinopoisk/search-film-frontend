import React from 'react'

import style from './CreatorsItem.module.scss'


const CreatorsItem: React.FC = () => {
    return (
        <div>
            <div className={style.creatorsItem}
            >
                <img src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85' />
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
    )
}

export default CreatorsItem