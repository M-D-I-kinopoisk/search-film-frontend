import React, { useState } from 'react'

import style from './ModalNavigation.module.scss'
import Comments from '../ModalPages/Comments/Comments'
import Creators from '../ModalPages/Creators/Creators'
import Awards from '../ModalPages/Awards/Awards'
import Trailers from '../ModalPages/Trailers/Trailers'

type ModalNavigationProps = {
    url: any
    setAactiveComponent: any
}

const ModalNavigation: React.FC<ModalNavigationProps> = ({ url, setAactiveComponent }) => {

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

export default ModalNavigation