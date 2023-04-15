import React, {ReactNode} from 'react'
import Link from 'next/link'

type AProps = {
    text: string | ReactNode,
    href: string,
    className: string,
    title: string
}

const HeaderLink: React.FC<AProps> = ({text, href, className, title}) => {
    return (
        <Link href={href} className={className} title={title}>
            {text}
        </Link>
    )
}

export default HeaderLink