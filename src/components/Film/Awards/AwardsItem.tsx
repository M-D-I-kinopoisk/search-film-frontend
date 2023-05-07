import React from 'react'

import styles from './Awards.module.scss'
import Image from 'next/image'

type AwardsItemProps = {
    inModal?: any
}

const AwardsItem: React.FC<AwardsItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={styles.moldalItem}>
                    <div className={styles.moldalItemImg}>
                        <Image alt='Награда'
                            width={84}
                            height={84}
                            src='https://thumbs.dfs.ivi.ru/storage26/contents/c/7/1075c56f00e8ddfdef1e1ab2aa7af5.png?q=85' />
                    </div>

                    <div className={styles.moldalItemInfo}>
                        <div className={styles.moldalItemTitle}>
                            Сезар
                        </div>

                        <div className={styles.moldalItemYear}>
                            2012
                        </div>

                        <div className={styles.moldalItemWins}>
                            <h3>Победы</h3>
                            <ul>
                                <li>Лучший актер</li>
                            </ul>
                        </div>

                        <div className={styles.moldalItemNominations}>
                            <h3>Номинации</h3>

                            <ul>
                                <li> Лучший фильм</li>
                                <li>Лучшая актриса второго плана</li>
                                <li>Лучший сценарий</li>
                                <li>Лучший звук</li>
                                <li>Лучший режиссер</li>
                                <li>Лучший </li>
                                <li>Лучший монтаж</li>
                                <li>Лучшая работа оператора</li>
                                <li>Лучший актер</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.awardsItem}>
                    <div className={styles.awardsItemImg}>
                        <Image alt='Награда'
                            width={72}
                            height={72}
                            src='https://thumbs.dfs.ivi.ru/storage26/contents/c/7/1075c56f00e8ddfdef1e1ab2aa7af5.png?q=85' />
                    </div>

                    <div>
                        <div className={styles.awardsItemInfoTitle}>
                            Британская академия · 2013
                        </div>

                        <div className={styles.awardsItemInfoDescription}>
                            Номинации: Лучший фильм на иностранном языке
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AwardsItem