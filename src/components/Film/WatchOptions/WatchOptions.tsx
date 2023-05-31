import styles from './WatchOptions.module.scss'

const WatchOptions = ({film}) => {

    return (
        <div className={styles.watchOptions}>
            <div className={styles.language}>
                <h3>Языки</h3>

                <div><span>Русский, Английский</span></div>
            </div>

            <div className={styles.sub}>
                <h3>Субтитры</h3>

                <div><span>Русский</span></div>
            </div>

            <div className={styles.quality}>
                <h3>Качество</h3>

                <div className={styles.qualityDescription}>
                    <span>4К</span>
                    <span>FullHD</span>
                    <span>1080</span>
                    <span>720</span>
                    <span>{film.rating.toFixed(1)}</span>
                </div>
            </div>

            <div className={styles.picture}>
                <h3>Изображение и звук.
                    <span>
                        Фактическое качество зависит от устройства и
                        ограничений правообладателя.
                    </span>
                </h3>

                <div className={styles.pictureDescription}>
                    <span>4К</span>
                    <span>FullHD</span>
                    <span>1080</span>
                    <span>720</span>
                    <span>{film.rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    )
}

export default WatchOptions