import Link from 'next-intl/link'
import styles from './locales.module.scss'
import {useLocale} from 'next-intl'
import {usePathname} from 'next-intl/client'
import {useSearchParams} from 'next/navigation'


const Locales = () => {

    const locale = useLocale()

    const searchParams = useSearchParams()

    const pathname = usePathname()


    return (
        <div className={styles.locales}>
            <Link
                href={`${pathname}${searchParams?.toString() ? `?${searchParams?.toString()}` : ''}`}
                locale='en'
                className={locale === 'en' ? `${styles.locales__btnLeft} ${styles.locales__btn_active}` : `${styles.locales__btnLeft}`}
            >EN
            </Link>
            <Link
                href={`${pathname}${searchParams?.toString() ? `?${searchParams?.toString()}` : ''}`}
                locale='ru'
                className={locale === 'ru' ? `${styles.locales__btnRight} ${styles.locales__btn_active}` : `${styles.locales__btnRight}`}
            >RU
            </Link>
        </div>
    )
}

export default Locales