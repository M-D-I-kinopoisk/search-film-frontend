import React, { useState } from 'react'

import style from './MyModal.module.scss'
import FilmInfo from '@/components/FilmPageComponents/FilmInfo/FilmInfo'
import NavBar from '../NavBar/NavBar'

type MyModalProps = {
    active?: any
    setActive?: any
    url?: any
    children: any
}

const MyModal: React.FC<MyModalProps> = ({ active, setActive, url, children }) => {
    const [activeComponent, setAactiveComponent] = useState(children)

    const func = () => {
        setActive('none')
        setAactiveComponent(children)
    }

    return (
        <div
            style={{ display: `${active}` }}
            className={style.modal}
        >
            <div className={style.modalContainer}>
                <div
                    onClick={() => func()}
                    className={style.backLink}>
                    <img src='/img/left-arrow.png' />
                    <span>К фильму</span>
                </div>

                <div className={style.modalWrapper}>
                    <div className={style.left}>
                        <div className={style.title}>
                            <span> 1+1 (Фильм 2011)</span>
                        </div>
                        <NavBar
                            setAactiveComponent={setAactiveComponent}
                            url={url}
                        />
                        {activeComponent}
                    </div>
                    <FilmInfo />
                </div>
            </div>
        </div>
    )
}

export default MyModal