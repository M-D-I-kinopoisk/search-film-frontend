import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'
import Footer from '../Footer/Footer'
import TabBar from '@/components/UI/TabBar/TabBar'
import Auth from '@/components/Auth/Auth'

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
            <Footer/>
            <Auth/>
            <TabBar/>
        </>
    )
}

export default MainContainer