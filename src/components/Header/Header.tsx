import {useState} from 'react'
import style from './header.module.scss'
import Image from 'next/image'

const Header = () => {
    const [headerModul, setHeaderModul] = useState(false)

    return (
        <div className={style.wrapper}>

        </div>
    )
}

export default Header