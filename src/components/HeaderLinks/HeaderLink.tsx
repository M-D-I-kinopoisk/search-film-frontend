import React from 'react'
import Link from 'next/link'

type AProps = {
    text: string,
    href: string
}

const HeaderLink: React.FC<AProps> = ({text, href}) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    )
}

export default HeaderLink