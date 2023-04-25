import React from 'react'

import style from './AdditionalsItem.module.scss'

type AdditionalsItemProps = {
    inModal?: any
}

const AdditionalsItem: React.FC<AdditionalsItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={style.item}>
                    <div className={style.itemImg}>
                        <img src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85' />
                    </div>
                    <div className={style.itemName}>
                        Трейлер (дублированный)
                    </div>
                    <div className={style.fullDuration}>
                        <img src='/img/time.png' />
                        <h3>0:02:11</h3>
                    </div>
                </div> :
                <div className={style.item}>
                    <div className={style.itemImg}>
                        <img src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85' />
                    </div>
                    <div className={style.itemName}>
                        Трейлер (дублированный)
                    </div>
                    <div className={style.shortDuration}>
                        3 мин.
                    </div>
                </div>
            }
        </>

    )
}

export default AdditionalsItem