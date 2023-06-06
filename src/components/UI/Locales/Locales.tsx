// import Link from 'next/link'

import {useRouter} from 'next/router'

// import {en} from '../../../../public/locales/en'
// import {ru} from '../../../../public/locales/ru'
import Link from 'next-intl/link'
import styles from './locales.module.scss'
import {useLocale} from 'next-intl'
import {usePathname} from 'next-intl/client'


const Locales = () => {
    const locale = useLocale()
    console.log(locale)
    // const {locale, locales, asPath} = useRouter()

    // const t = locale === 'en' ? en : ru
    const pathname = usePathname()
    console.log(pathname)

    return (
        <div className={styles.locales}>
            <Link
                href={`${pathname}`}
                locale='en'
                className={locale === 'en' ? `${styles.locales__btnLeft} ${styles.locales__btn_active}` : `${styles.locales__btnLeft}`}
            >EN
            </Link>
            <Link
                href={`${pathname}`}
                locale='ru'
                className={locale === 'ru' ? `${styles.locales__btnRight} ${styles.locales__btn_active}` : `${styles.locales__btnRight}`}
            >RU
            </Link>
        </div>
    )
}

export default Locales