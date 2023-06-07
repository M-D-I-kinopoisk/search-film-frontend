'use client'

import {useState} from 'react'

import styles from './filmsClause.module.scss'
import {useTranslations} from 'next-intl'

const FilmsClause = () => {

    const t = useTranslations('FilmsClause')

    const [visible, setVisible] = useState(false)

    return (
        <div className={styles.clause}>
            <div className={styles.clause__header}>
                {t('title')}
            </div>
            <div className={styles.clause__text}>
                <div className={visible ? styles.clause__innerText__hide : styles.clause__innerText}>
                    <p>
                        {t('description')}
                    </p>
                    {visible && <>
                        <p>
                            {t('description2')}
                        </p>
                        <p>{t('description3')}</p>
                        <ol>
                            <li>
                                {t('description4')}
                            </li>
                            <li>
                                {t('description5')}
                            </li>
                            <li>
                                {t('description6')}
                            </li>
                            <li>
                                {t('description7')}
                            </li>
                            <li>
                                {t('description8')}
                            </li>
                            <li>
                                {t('description9')}
                            </li>
                            <li>
                                {t('description10')}
                            </li>
                            <li>
                                {t('description11')}
                            </li>
                        </ol>
                        <p>
                            {t('description12')}
                        </p>
                    </>}
                </div>

                <span onClick={() => setVisible(!visible)}
                      className={styles.clause__toggle}>
                    {visible ? t('toggle') : t('toggle2')}
                </span>
            </div>
        </div>
    )
}

export default FilmsClause