import React, { useState } from 'react'

import style from './NavBar.module.scss'
import Link from 'next/link'
import Creators from '@/components/ModalPages/Creators'
import Comments from '@/components/ModalPages/Comments'
import Trailers from '@/components/ModalPages/Trailers'
import Awards from '@/components/ModalPages/Awards'

type NavBarProps = {
    url: any
    setAactiveComponent: any
}

const NavBar: React.FC<NavBarProps> = ({ url, setAactiveComponent }) => {

    let links = [
        { title: 'Создатели', value: 'creators', component: <Creators /> },
        { title: 'Комментарии', value: 'comments', component: <Comments /> },
        { title: 'Трейлеры', value: 'trailers', component: <Trailers /> },
        { title: 'Награды', value: 'awards', component: <Awards /> }]

    const [active, setActive] = useState(url)

    let setActiveFunc = (value, component) => {
        setActive(value)
        setAactiveComponent(component)
    }

    return (
        <ul className={style.navbar}>
            {
                links.map((link) =>
                    <li key={link.value}
                        className={active === link.value
                            ? style.active
                            : ''}
                        onClick={() => setActiveFunc(link.value, link.component)}
                    >
                        {link.title}
                    </li>
                )
            }
        </ul>
    )
}

export default NavBar