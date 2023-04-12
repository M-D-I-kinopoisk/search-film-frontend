import A from '@/components/A'
import Header from '@/components/Header/Header'

const Home = () => {
    return (
        <>
        <Header/>
        <div className='div'>
            <A href='/' text='Главная'/>
            <A href='/actor' text='Актер'/>
        </div>
        </>
    )
}

export default Home