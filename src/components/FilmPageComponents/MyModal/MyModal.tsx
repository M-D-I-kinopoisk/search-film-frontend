import React, { useState } from 'react'

import style from './MyModal.module.scss'
import NavBar from '../ModalNavigation/ModalNavigation'

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
                    <div className={style.filmInfo}>
                        <img src='https://thumbs.dfs.ivi.ru/storage2/contents/6/1/0ceca03c51c3d38f34bdf3fd0dd2c8.jpg/128x196/?q=85' />
                        <div className={style.ball}>
                            <span>8,9</span>
                            <img src='/img/progress.png' />
                        </div>
                        <div className={style.information}>
                            <span>2011, Франция, Драмы</span>
                        </div>
                        <div className={style.duration}>
                            <img src='/img/time.png' />
                            <span>112 минут</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyModal