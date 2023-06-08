import FilterActor from '../../components/Filter/FilterFilms/FilterActor/FilterActor'
import {render, screen, fireEvent} from '@testing-library/react'
import {useRouter} from 'next/navigation'
import {NextIntlProvider} from 'next-intl'

jest.mock('next/navigation')

describe('FilterActor', () => {
    const router = {
        push: jest.fn(),
        query: {}
    }

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue(router)
    })

    test('renders input', () => {
        render(
            <NextIntlProvider locale={'ru'}>
                <FilterActor listActor={[]}/>
            </NextIntlProvider>
        )

        const input = screen.getByLabelText('Актеры')
        expect(input).toBeInTheDocument()
    })

    test('filters actors by name', () => {
        const actors = [
            {id: 1, nameRU: 'Актер 1', nameEN: 'Actor 1'},
            {id: 2, nameRU: 'Актер 2', nameEN: 'Actor 2'},
            {id: 3, nameRU: 'Актер 3', nameEN: 'Actor 3'}
        ]

        render(
            <NextIntlProvider locale={'ru'}>
                <FilterActor listActor={actors}/>
            </NextIntlProvider>
        )

        const input = screen.getByLabelText('Актеры')
        fireEvent.change(input, {target: {value: 'актер'}})
        const actorButtons = screen.getAllByRole('button')
        expect(actorButtons).toHaveLength(3)
    })
})