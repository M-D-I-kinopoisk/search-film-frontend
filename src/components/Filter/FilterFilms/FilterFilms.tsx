'use client'

import { useState} from 'react'
import {useRouter} from 'next/navigation'

import {useSelector} from 'react-redux'

import {selectFilterText} from '@/redux/FilterTextSlice'

import {VscChromeClose} from 'react-icons/vsc'

import FilterFilmsCategories from '@/components/Filter/FilterFilms/FilterFilmsCategories/FilterFilmsCategories'
import FilterSort from '@/components/Filter/FilterFilms/FilterSort/FilterSort'
import FilterGenres from '@/components/Filter/FilterFilms/FilterGenres/FilterGenres'
import FilterCountries from '@/components/Filter/FilterFilms/FilterCountries/FilterCountries'
import FilterYears from '@/components/Filter/FilterFilms/FilterYears/FilterYears'
import FilterRating from '@/components/Filter/FilterFilms/FilterRating/FilterRating'
import FilterActor from '@/components/Filter/FilterFilms/FilterActor/FilterActor'
import FilterDir from '@/components/Filter/FilterFilms/FilterDir/FilterDir'
import FilterGrades from '@/components/Filter/FilterFilms/FilterGrades/FilterGrades'
import FilterParameters from '@/components/Filter/FilterFilms/FilterParameters/FilterParameters'

import styles from './filterFilms.module.scss'
import {useTranslations} from 'next-intl'


const FilterFilms = ({genres, countries, listActor, listDir}) => {

    const router = useRouter()

    const t = useTranslations('FilterFilms')


    const [activePlank, setActivePlank] = useState({
        genres: false, countries: false, years: false, rating: false,
        grade: false, searchDir: false, searchActor: false
    })



    const {filterTextObj} = useSelector(selectFilterText)


    const resetFilter = () => {
        router.replace('/movies')
    }



    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>{t('title')}</h1>
            </div>
            <FilterParameters/>

            <FilterSort/>

            <div className={styles.filter}>
                <div className={styles.filter__content}>
                    <div className={styles.filter__plankList}>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterGenres}
                                                   title={'Жанры'}
                                                   titleEN={'Genres'}
                                                   filterText={filterTextObj.arrGenres}
                                                   filterTextEN={filterTextObj.arrGenresEN}
                                                   activePlank={activePlank.genres}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: false,
                                                       rating: false,
                                                       grade: false,
                                                       genres: !activePlank.genres,
                                                       searchDir: false,
                                                       searchActor: false,
                                                   })}>


                                <FilterGenres genres={genres}/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterCountries}
                                                   title={'Страны'}
                                                   titleEN={'Countries'}
                                                   filterText={filterTextObj.arrCountries}
                                                   filterTextEN={filterTextObj.arrCountriesEN}
                                                   activePlank={activePlank.countries}
                                                   onClick={() => setActivePlank({
                                                       countries: !activePlank.countries,
                                                       years: false,
                                                       rating: false,
                                                       grade: false,
                                                       genres: false,
                                                       searchDir: false,
                                                       searchActor: false,
                                                   })}>

                                <FilterCountries countries={countries}/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterYears}
                                                   title={'Годы'}
                                                   titleEN={'Years'}
                                                   filterText={filterTextObj.arrYears}
                                                   filterTextEN={filterTextObj.arrYears}
                                                   activePlank={activePlank.years}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: !activePlank.years,
                                                       rating: false,
                                                       grade: false,
                                                       genres: false,
                                                       searchDir: false,
                                                       searchActor: false,
                                                   })}>

                                <FilterYears/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterRating}
                                                   title={'Рейтинг Кинопоиска'}
                                                   titleEN={'Kinopoisk Rating'}
                                                   filterText={filterTextObj.ratingStart}
                                                   filterTextEN={filterTextObj.ratingStart}
                                                   activePlank={activePlank.rating}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: false,
                                                       rating: !activePlank.rating,
                                                       grade: false,
                                                       genres: false,
                                                       searchDir: false,
                                                       searchActor: false,
                                                   })}>

                                <FilterRating/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterRating}
                                                   title={'Оценки Кинопоиска'}
                                                   titleEN={'Kinopoisk estimates'}
                                                   filterText={filterTextObj.countRatingStart}
                                                   filterTextEN={filterTextObj.countRatingStart}
                                                   activePlank={activePlank.grade}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: false,
                                                       rating: false,
                                                       grade: !activePlank.grade,
                                                       genres: false,
                                                       searchDir: false,
                                                       searchActor: false,
                                                   })}>

                                <FilterGrades/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterSearch}
                                                   title={'Поиск по режиссерам'}
                                                   titleEN={'Search by directors'}
                                                   filterText={filterTextObj.arrDirMembers}
                                                   filterTextEN={filterTextObj.arrDirMembersEN}
                                                   activePlank={activePlank.searchDir}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: false,
                                                       rating: false,
                                                       grade: false,
                                                       genres: false,
                                                       searchDir: !activePlank.searchDir,
                                                       searchActor: false,
                                                   })}>

                                <FilterDir listDir={listDir}/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterSearch}
                                                   title={'Поиск по актерам'}
                                                   titleEN={'Search by actors'}
                                                   filterText={filterTextObj.arrActorMembers}
                                                   filterTextEN={filterTextObj.arrActorMembersEN}
                                                   activePlank={activePlank.searchActor}
                                                   onClick={() => setActivePlank({
                                                       countries: false,
                                                       years: false,
                                                       rating: false,
                                                       grade: false,
                                                       genres: false,
                                                       searchDir: false,
                                                       searchActor: !activePlank.searchActor,
                                                   })}>

                                <FilterActor listActor={listActor}/>

                            </FilterFilmsCategories>
                        </div>
                    </div>
                    <div className={styles.filter__reset}>
                        <button
                            className={Object.keys(filterTextObj).length !== 0 ?
                                styles.filter__resetContent :
                                `${styles.filter__resetContent} ${styles.resetNotActive}`

                            }
                            onClick={() => resetFilter()}>
                            <VscChromeClose size={22}/>
                            {t('reset')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterFilms