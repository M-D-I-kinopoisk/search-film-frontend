'use client'

import {useLocale} from 'next-intl'

import styles from '@/app/[locale]/home.module.scss'

import Image from 'next/image'

type TeaserBtnProps = {
    src: string,
    alt: string,
    width: number,
    height: number,
    text: string,
    textEN: string,
    className: string
}

const TeaserButton = (props: TeaserBtnProps) => {

    const locale = useLocale()

    return (
        <li className={props.className}>
            <div className={styles.content}>
                <Image src={props.src}
                       alt={props.alt}
                       width={props.width}
                       height={props.width}/>
                <div>{locale === 'ru' ? props.text : props.textEN }</div>
            </div>
        </li>
    )
}

export default TeaserButton