'use client'

import {FC, useEffect, useRef} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'

import styles from './filterFilmsCategories.module.scss'

export interface FilterCategoriesProps {
    className: string
    children
    title: string
    filterText?: string[]
    onClick: () => void
    activePlank: boolean
}


const FilterFilmsCategories: FC<FilterCategoriesProps> = ({
                                                              className,
                                                              children,
                                                              title,
                                                              filterText,
                                                              onClick,
                                                              activePlank
                                                          }) => {

    const modalRef = useRef<HTMLDivElement>(null)
    const categoryRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        if (activePlank) {
            const handleClick = (e) => {

                if (modalRef.current) {
                    // console.log(22)
                    if (categoryRef.current?.contains(e.target)) return

                    if (!modalRef.current.contains(e.target)) {
                        console.log('закрыть')
                        onClick()
                    }
                }
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }
        } else return
    }, [activePlank, onClick])


    return (
        <>
            <div ref={categoryRef} onClick={onClick}
                 className={activePlank ? `${styles.categories__plank} ${styles.isActive}` : `${styles.categories__plank}`}>
                <div className={styles.categories__plankGroup}>
                    <span>{title}</span>
                    <br/>
                    {filterText?.map((text, inx) =>
                        <span
                            className={styles.categories__text}
                            key={inx}>{text}, </span>)}
                </div>
                {activePlank ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                    (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
            </div>
            {activePlank
                && <div ref={modalRef} className={className}>
                    <div className={styles.filterDropDown__inner}>
                        <div className={styles.filterDropDown__content}>
                            {children}
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default FilterFilmsCategories