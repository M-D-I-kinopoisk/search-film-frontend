'use client'

import {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import {VscChromeClose} from 'react-icons/vsc'

import FilterFilmsCategories from '@/components/FilterFilms/FilterFilmsCategories/FilterFilmsCategories'
import FilterSort from '@/components/FilterFilms/FilterSort/FilterSort'
import FilterGenres from '@/components/FilterFilms/FilterGenres/FilterGenres'
import FilterCountries from '@/components/FilterFilms/FilterCountries/FilterCountries'
import FilterYears from '@/components/FilterFilms/FilterYears/FilterYears'
import FilterRating from '@/components/FilterFilms/FilterRating/FilterRating'
import FilterActor from '@/components/FilterFilms/FilterActor/FilterActor'
import FilterDir from '@/components/FilterFilms/FilterDir/FilterDir'
import FilterGrades from '@/components/FilterFilms/FilterGrades/FilterGrades'

import styles from './filterFilms.module.scss'


const FilterFilms = () => {


    const [activePlank, setActivePlank] = useState({
        genres: false, countries: false, years: false, rating: false,
        grade: false, searchDir: false, searchActor: false
    })

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    const resetFilter = () => {
        dispatch(getFilterTextObj(
            {}
        ))
        dispatch(getFilterObj(
            {
                'ratingStart': 1,
                'countRatingStart': 1000,
                'part': 1,
                'typeSorting': 'year'
            }
        ))
    }


    return (
        <div className={styles.wrapper}>

            <FilterSort/>

            <div className={styles.filter}>
                <div className={styles.filter__content}>
                    <div className={styles.filter__plankList}>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterGenres}
                                                   title={'Жанры'}
                                                   filterText={filterTextObj.arrGenres}
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


                                <FilterGenres/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterCountries}
                                                   title={'Страны'}
                                                   filterText={filterTextObj.arrCountries}
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

                                <FilterCountries/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterYears} title={'Годы'}
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
                            <FilterFilmsCategories className={styles.filterRating} title={'Рейтинг Кинопоиска'}
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
                            <FilterFilmsCategories className={styles.filterRating} title={'Оценки Кинопоиска'}
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
                            <FilterFilmsCategories className={styles.filterSearch} title={'Поиск по режиссерам'}
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

                                <FilterDir/>

                            </FilterFilmsCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterFilmsCategories className={styles.filterSearch} title={'Поиск по актерам'}
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

                                <FilterActor/>

                            </FilterFilmsCategories>
                        </div>
                    </div>
                    <div className={styles.filter__reset}>
                        <button className={styles.filter__resetContent} onClick={() => resetFilter()}>
                            <VscChromeClose size={20}/>
                            Сбросить фильтры
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterFilms