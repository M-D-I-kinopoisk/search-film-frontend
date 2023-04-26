import React from 'react'

import style from './MyButton.module.scss'

type MyButtonProps = {
    img?: any
    children?: any
}

const MyButton: React.FC<MyButtonProps> = ({ img, children, ...props }) => {
    console.log(props)
    
    return (
        <button {...props}>
            {
                img ?
                    <>
                        <img src={img} />
                        <h3>{children}</h3>
                    </> :
                    <>
                        <h3>{children}</h3>
                    </>
            }
        </button>
    )
}

export default MyButton