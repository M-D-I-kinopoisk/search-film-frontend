'use client'

import {useEffect, useRef} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'

import styles from './filterFilmsCategories.module.scss'

import {useLocale} from 'next-intl'

import {FilterCategoriesProps} from '@/types/components/Filter'

const FilterFilmsCategories = (props: FilterCategoriesProps) => {

    const modalRef = useRef<HTMLDivElement>(null)
    const categoryRef = useRef<HTMLDivElement>(null)

    const locale = useLocale()

    useEffect(() => {
        if (props.activePlank) {
            const handleClick = (e) => {

                if (modalRef.current) {
                    if (categoryRef.current?.contains(e.target)) return

                    if (!modalRef.current.contains(e.target)) {
                        // console.log('закрыть')
                        props.onClick()
                    }
                }
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }
        } else return
    }, [props.activePlank, props.onClick])

    return (
        <>
            <div ref={categoryRef} onClick={props.onClick}
                 className={props.activePlank ? `${styles.categories__plank} ${styles.isActive}` : `${styles.categories__plank}`}>
                <div className={styles.categories__plankGroup}>
                    <span>{locale === 'ru' ? props.title : props.titleEN}</span>
                    <br/>
                    {locale === 'ru' ?
                        (props.filterText?.map((text, inx) =>
                            inx === 0 ?
                                <span key={inx}
                                      className={styles.categories__text}>{text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}</span> :
                                <span className={styles.categories__text}
                                      key={inx}>, {text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}</span>))
                        :
                        (props.filterTextEN?.map((text, inx) =>
                            inx === 0 ?
                                <span key={inx}
                                      className={styles.categories__text}>{text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}</span> :
                                <span className={styles.categories__text}
                                      key={inx}>, {text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}</span>))
                    }
                </div>
                {props.activePlank ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                    (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
            </div>
            {props.activePlank
                && <div ref={modalRef} className={props.className}>
                    <div className={styles.filterDropDown__inner}>
                        <div className={styles.filterDropDown__content}>
                            {props.children}
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default FilterFilmsCategories