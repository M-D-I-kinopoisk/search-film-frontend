'use client'

import {useEffect, useRef, useState} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'
import {MdOutlineSort} from 'react-icons/md'

import { useSelector} from 'react-redux'
import { selectFilter} from '@/redux/FilterSlice'

import styles from './filterSort.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useTranslations} from 'next-intl'


const FilterSort = () => {

    const t = useTranslations('FilterSort')

    const pathname = usePathname()

    const router = useRouter()

    const searchParams = useSearchParams()

    const [sortToggle, SetSortToggle] = useState(false)

    const modalRef = useRef<HTMLDivElement>(null)

    const {filterObj} = useSelector(selectFilter)



    useEffect(() => {

        if (sortToggle) {
            const handleClick = (e) => {
                if (!modalRef.current?.contains(e.target)) {
                    SetSortToggle(false)
                } else return
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }

        } else return

    }, [sortToggle])

    function sort(str) {


        let url = '/movies'
        if (searchParams?.toString()) {

            if (searchParams.has('sort')) {

                const valueStr = 'sort=' + searchParams.get('sort')
                const newStr = searchParams.toString().replace(valueStr, `sort=${str}`)

                router.push(`${pathname}?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&sort=${str}`)
            }
        } else {
            router.push(`${pathname}?sort=${str}`)
        }
    }


    return (
        <div className={styles.sort}>
            <div className={styles.sort__block} ref={modalRef}>
                <div className={styles.sort__group} onClick={() => SetSortToggle(!sortToggle)}>
                    <MdOutlineSort style={{transform: ' scale(-1, 1)'}} size={20}/>
                    <p className={styles.sort__title}>
                        {filterObj.typeSorting === 'year' && t('title1') }
                        {filterObj.typeSorting === 'rating' && t('title2')}
                        {filterObj.typeSorting === 'countRating' && t('title3')}
                        {filterObj.typeSorting === 'alphabetRU' && t('title4')}
                    </p>
                    {sortToggle ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                        (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
                </div>
                {sortToggle && <div className={styles.sort__dropDown}>
                    <p className={styles.sort__dropDown_title}>{t('title')}</p>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'countRating' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('countRating')}>
                            <p className={filterObj.typeSorting === 'countRating' ?
                                `${styles.sort__dropDown_text} ${styles.sort__text_active} ` :
                                styles.sort__dropDown_text}>
                                {t('text1')}</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'rating' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('rating')}>
                            <p className={filterObj.typeSorting === 'rating' ?
                                `${styles.sort__dropDown_text} ${styles.sort__text_active} ` :
                                styles.sort__dropDown_text}>
                                {t('text2')}</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'year' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('year')}>
                            <p className={filterObj.typeSorting === 'year' ?
                                `${styles.sort__dropDown_text} ${styles.sort__text_active} ` :
                                styles.sort__dropDown_text}>
                                {t('text3')}</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'alphabetRU' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('alphabetRU')}>
                            <p className={filterObj.typeSorting === 'alphabetRU' ?
                                `${styles.sort__dropDown_text} ${styles.sort__text_active} ` :
                                styles.sort__dropDown_text}>
                                {t('text4')}</p>
                        </button>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default FilterSort