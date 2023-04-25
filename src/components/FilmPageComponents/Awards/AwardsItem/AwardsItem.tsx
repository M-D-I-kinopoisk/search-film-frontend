import React from 'react'

import style from './AwardsItem.module.scss'

type AwardsItemProps = {
    inModal?: any
}

const AwardsItem: React.FC<AwardsItemProps> = ({ inModal }) => {

    return (
        <>
            {inModal ?
                <div className={style.moldalItem}>
                    <div className={style.moldalItemImg}>
                        <img src='https://thumbs.dfs.ivi.ru/storage26/contents/c/7/1075c56f00e8ddfdef1e1ab2aa7af5.png?q=85' />
                    </div>

                    <div className={style.moldalItemInfo}>
                        <div className={style.moldalItemTitle}>
                            Европейская киноакадемия
                        </div>
                        <div className={style.moldalItemYear}>
                            2012
                        </div>
                        <div className={style.moldalItemWins}>
                            <h3>Победы</h3>
                            <ul>
                                <li>Лучший актер</li>
                            </ul>
                        </div>

                        <div className={style.moldalItemNominations}>
                            <h3>Номинации</h3>
                            <ul>
                                <li> Лучший фильм</li>
                                <li>Лучшая актриса второго плана</li>
                                <li>    Лучший сценарий</li>
                                <li>   Лучший звук</li>
                                <li>   Лучший режиссер</li>
                                <li>  Лучший </li>
                                <li>   Лучший монтаж</li>
                                <li>  Лучшая работа оператора</li>
                                <li>Лучший актер</li>
                            </ul>
                        </div>
                    </div>
                </div>

                :

                <div className={style.awardsItem}>
                    <div className={style.awardsItemImg}>
                        <img src='https://thumbs.dfs.ivi.ru/storage26/contents/c/7/1075c56f00e8ddfdef1e1ab2aa7af5.png?q=85' />
                    </div>
                    <div className={style.awardsItemInfo}>
                        <div className={style.awardsItemInfoTitle}>
                            Британская академия · 2013
                        </div>
                        <div className={style.awardsItemInfoDescription}>
                            Номинации: Лучший фильм на иностранном языке
                        </div>
                    </div>
                </div>
            }
        </>



    )
}

export default AwardsItem