import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'

type MainContainerProps = {
    children: any,
    title: string
}

const MainContainer: React.FC<MainContainerProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <meta key={'film search'}/>
                <title>{title}</title>
            </Head>
            <Header/>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer