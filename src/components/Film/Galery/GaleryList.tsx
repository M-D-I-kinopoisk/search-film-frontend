import React, { useEffect, useRef, useState } from 'react'

import style from './Galery.module.scss'
import GaleryItem from './GaleryItem'

const GaleryList: React.FC = () => {
    let [items, setItems] = useState(
        [1, 2, 3, 4, 5])

    // const slider: any = useRef()
    // const next: any = useRef()
    // const prev: any = useRef()

    // let switchableElementsCount = 0
    // let sliderWidth = 0

    // useEffect(() => {
    //     sliderWidth = slider.current.offsetWidth
    // }, [])


    // let position = 0
    // let contentWidth = 153 * items.length + 24 * items.length
    // let contentWidthForIf = 153 * items.length + 24 * items.length

    // const prevHandler = () => {
    //     if (sliderWidth > 1160) {
    //         switchableElementsCount = 6
    //     } else {
    //         switchableElementsCount = 3
    //     }

    //     if (contentWidth + sliderWidth < contentWidthForIf) {
    //         position += 153 * switchableElementsCount + 24 * switchableElementsCount
    //         next.current.style.display = 'block'
    //     } else {
    //         position += 153 * Math.round((contentWidthForIf - contentWidth) / 177) + 24 *
    //             Math.round((contentWidthForIf - contentWidth) / 177)
    //         prev.current.style.display = 'none'
    //     }

    //     contentWidth = contentWidthForIf + position

    //     slider.current.childNodes.forEach(element => {
    //         element.style = `transform: translateX(${position}px)`
    //     });
    //    }

    // const nextHandler = () => {
    //     if (sliderWidth > 1160) {
    //         switchableElementsCount = 6
    //     } else {
    //         switchableElementsCount = 1
    //     }

    //     if (contentWidth - sliderWidth > sliderWidth) {
    //         position -= 153 * switchableElementsCount + 24 * switchableElementsCount
    //         prev.current.style.display = 'block'
    //     } else {
    //         position -= 153 * Math.round((contentWidth - sliderWidth) / 177) + 24 *
    //             Math.round((contentWidth - sliderWidth) / 177)
    //         next.current.style.display = 'none'
    //     }

    //     contentWidth = contentWidthForIf + position

    //     slider.current.childNodes.forEach(element => {
    //         element.style = `transform: translateX(${position}px)`
    //     });
    // }

    return (
        <div className={style.gallery}>
            <div className={style.galleryTitle}>
                С фильмом «1+1» смотрят
            </div>
            
            <div
                // ref={slider}
                className={style.galleryItems}>
                {items.map((el) =>
                    <GaleryItem key={el}
                        num={el} />
                )}
            </div>

            {/* <div
                ref={prev}
                onClick={() => prevHandler()}
                className={style.prev}>
                <img src='/img/prev.png' />
            </div>
            <div
                ref={next}
                onClick={() => nextHandler()}
                className={style.next}>
                <img src='/img/next.png' />
            </div> */}
        </div>
    )
}

export default GaleryList