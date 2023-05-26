import styles from '@/app/home.module.scss'
import Image from 'next/image'

type TeaserBtnProps = {
    src: string,
    alt: string,
    width: number,
    height: number,
    text: string,
    className: string
}

const TeaserBtn = (props: TeaserBtnProps) => {
    return (
        <li className={props.className}>
            <div className={styles.content}>
                <Image src={props.src}
                       alt={props.alt}
                       width={props.width}
                       height={props.width}/>
                <div>{props.text}</div>
            </div>
        </li>
    )
}

export default TeaserBtn