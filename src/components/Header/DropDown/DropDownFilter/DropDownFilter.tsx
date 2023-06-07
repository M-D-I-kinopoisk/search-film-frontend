'use client'

import Link from 'next/link'

import {useLocale} from 'next-intl'
import {useTranslations} from 'next-intl'

import style from './dropDownFilter.module.scss'

const DropDownFilter = ({list}) => {
    const locale = useLocale()
    const t = useTranslations('DropDownFilter')

    return (
        <>
            <div>
                <p style={{color: 'white', marginBottom: '15px'}}>{t('title')}</p>
                <ul className={style.dropDown__genres}>
                    {list.genres.map((element, idx) => {
                        return (
                            <div key={idx}>
                                <li>
                                    <Link
                                        prefetch={false}
                                        className={style.dropDown__a}
                                        href={`/movies/${element.nameEN}`}>
                                        {locale === 'ru' ? element.nameRU : element.nameEN}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className={style.dropDown__countryYearsBlock}>
                <p style={{color: 'white', marginBottom: '15px'}}>{t('title2')}</p>
                <ul className={style.dropDown__country}>
                    {list.country.map((element, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={style.dropDown__a}
                                      prefetch={false}
                                      href={element.href}>
                                    {locale === 'ru' ? element.name : element.nameEN}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <p
                    style={{
                        color: 'white',
                        marginTop: '15px',
                        marginBottom: '10px',
                    }}>
                    {t('title3')}
                </p>
                <ul className={style.dropDown__country}>
                    {list.years.map((element, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={style.dropDown__a}
                                      prefetch={false}
                                      href={element.href}>
                                    {locale === 'ru' ? element.name : element.nameEN}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default DropDownFilter