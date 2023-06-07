'use client'

import {useSelector} from 'react-redux'
import {selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterParameters.module.scss'
import {useLocale, useTranslations} from 'next-intl'


export default function FilterParameters() {

    const locale = useLocale()

    const t = useTranslations('FilterParameters')


    const {filterTextObj} = useSelector(selectFilterText)

    return (
        <div className={styles.parameters}>
            {filterTextObj.arrGenres ?
                (locale === 'ru' ?
                        filterTextObj.arrGenres.map((item, inx) =>
                            <span key={inx}>{item.charAt(0).toUpperCase() + item.slice(1)}, </span>) :
                        filterTextObj.arrGenresEN.map((item, inx) =>
                            <span key={inx}>{item.charAt(0).toUpperCase() + item.slice(1)}, </span>)
                ) :
                <span>{t('genres')}</span>
            }
            {filterTextObj.arrCountries ?
                (locale === 'ru' ?
                        filterTextObj.arrCountries.map((item, inx) =>
                            <span key={inx}>{item}, </span>) :
                        filterTextObj.arrCountriesEN.map((item, inx) =>
                            <span key={inx}>{item}, </span>)
                ) :
                <span>{t('countries')}</span>
            }
            {filterTextObj.arrYears ?
                filterTextObj.arrYears.map((item, inx) =>
                    <span key={inx}>{item}</span>) :
                <span>{t('years')}</span>}

            {filterTextObj.ratingStart?.map((item, inx) =>
                <span key={inx}>{t('ratingStart')}{item}</span>)}

            {filterTextObj.countRatingStart?.map((item, inx) =>
                <span key={inx}>{t('countRatingStart')}{item}</span>)}

            {locale === 'ru' ?
                filterTextObj.arrDirMembers?.map((item, inx) =>
                    <span key={inx}>, {item}</span>) :
                filterTextObj.arrDirMembersEN?.map((item, inx) =>
                    <span key={inx}>, {item}</span>)}

            {locale === 'ru' ?
                filterTextObj.arrActorMembers?.map((item, inx) =>
                    <span key={inx}>, {item}</span>) :
                filterTextObj.arrActorMembersEN?.map((item, inx) =>
                    <span key={inx}>, {item}</span>)}

        </div>
    )
}