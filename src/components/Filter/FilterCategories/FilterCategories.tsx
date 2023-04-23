import {FC, useEffect, useRef} from 'react'
import styles from './filterCategories.module.scss'
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'

export interface FilterCategoriesProps {
    className: string
    children
    title: string
    onClick: () => void
    activePlank: boolean
}


const FilterCategories: FC<FilterCategoriesProps> = ({
                                                         className,
                                                         children,
                                                         title,
                                                         onClick,
                                                         activePlank
                                                     }) => {

    const modalRef = useRef(null)
    const categoryRef = useRef(null)


    useEffect(() => {

        if (activePlank) {
            const handleClick = (e) => {

                if (modalRef.current) {

                    if (categoryRef.current.contains(e.target)) return

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

export default FilterCategories