import {FC} from 'react'
import style from '@/components/Header/DropDown/DropDown.module.scss'
import Link from 'next/link'

export interface GenresProps {
    list: any
}

const DropDownFilter: FC<GenresProps> = ({list}) => {
    return (
        <>
            <div>
                <p style={{color: 'white', marginBottom: '15px'}}>Жанры</p>
                <ul className={style.dropDown__genres}>
                    {list.genres.map((element, idx) => {
                        return (
                            <div key={idx}>
                                <li>
                                    <Link
                                        className={style.dropDown__a}
                                        href={element.href}
                                    >
                                        {element.name}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className={style.dropDown__countyYarsBlock}>
                <p style={{color: 'white', marginBottom: '15px'}}>Страны</p>
                <ul className={style.dropDown__country}>
                    {list.country.map((element, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={style.dropDown__a} href={element.href}>
                                    {element.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <p
                    style={{
                        color: 'white',
                        marginTop: '15px',
                        marginBottom: '10px',
                    }}
                >
                    Годы
                </p>
                <ul className={style.dropDown__country}>
                    {list.years.map((element, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={style.dropDown__a} href={element.href}>
                                    {element.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default DropDownFilter