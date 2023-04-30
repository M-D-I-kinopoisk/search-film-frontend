import Link from 'next/link'

import {useRouter} from 'next/router'

import {en} from '../../../../public/locales/en'
import {ru} from '../../../../public/locales/ru'

import styles from './locales.module.scss'


const Locales = () => {

    const {locale, locales, asPath} = useRouter()

    const t = locale === 'en' ? en : ru

    return (
        <div className={styles.locales}>
            <Link
                href={asPath}
                locale='en'
                className={locale === 'en' ? `${styles.locales__btnLeft} ${styles.locales__btn_active}` : `${styles.locales__btnLeft}`}
            >EN
            </Link>
            <Link
                href={asPath}
                locale='ru'
                className={locale === 'ru' ? `${styles.locales__btnRight} ${styles.locales__btn_active}` : `${styles.locales__btnRight}`}
            >RU
            </Link>
        </div>
    )
}

export default Locales