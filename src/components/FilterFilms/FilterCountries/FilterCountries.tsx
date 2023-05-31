import styles from './filterCountries.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import {BsCheckLg} from 'react-icons/bs'
import {useParams, usePathname, useRouter, useSearchParams} from 'next/navigation'


const FilterCountries = ({countries}) => {

    const router = useRouter()
    const params = useParams()
    const pathname = usePathname()

    const searchParams = useSearchParams()


    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()


    function filterCountries(id, nameCountries, nameCountriesEN) {
        if ('arrIdCountries' in filterObj) {

            if (filterObj.arrIdCountries && filterObj.arrIdCountries.includes(id)) {

                if (filterObj.arrIdCountries.length === 1) {
                    const strGenres = filterTextObj.hasOwnProperty('arrGenresEN') ?
                        filterTextObj.arrGenresEN.join('+') :
                        ''
                    router.push(`movies/${strGenres}?${searchParams.toString()}`,)

                } else {
                    const filterListNameCountriesEN = filterTextObj.arrCountriesEN.filter((str) => str !== nameCountriesEN)
                    const str = (filterListNameCountriesEN.join('+'))
                    const strGenres = filterTextObj.hasOwnProperty('arrGenresEN') ?
                        filterTextObj.arrGenresEN.join('+') :
                        ''
                    router.push(`/movies/${strGenres}/${str.toLowerCase()}?${searchParams.toString()}`,)
                }
            } else {

                const str = ([...filterTextObj.arrCountriesEN, nameCountriesEN].join('+'))
                const strGenres = filterTextObj.hasOwnProperty('arrGenresEN') ?
                    filterTextObj.arrGenresEN.join('+') :
                    ''
                router.push(`/movies/${strGenres}/${str.toLowerCase()}?${searchParams.toString()}`,)

            }
        } else {

            const strGenres = filterTextObj.hasOwnProperty('arrGenresEN') ?
                filterTextObj.arrGenresEN.join('+') :
                ''
            router.push(`/movies/${strGenres}/${nameCountriesEN.toLowerCase()}?${searchParams.toString()}`,)
        }
    }


    return (
        <ul className={styles.country__list}>
            {countries.map((element, inx) => {
                return <li key={inx} className={styles.country__item}>
                    <button onClick={() => filterCountries(element.id, element.nameRU, element.nameEN)}>
                        {element.nameRU}
                    </button>
                    {filterObj.arrIdCountries?.includes(element.id) ?
                        <div className={styles.country__checkbox_active}>
                            <BsCheckLg size={20}/>
                        </div> :
                        <div className={styles.country__checkbox}>
                            <BsCheckLg size={20}/>
                        </div>}
                </li>

            })}
        </ul>
    )
}

export default FilterCountries