import { getFilterObj } from '../../redux/FilterSlice'
import FilterSlice from '../../redux/FilterSlice'

describe('Проверка FilterSlice', () => {
    const initialFilterObj = {
        'ratingStart': 1,
        'countRatingStart': 1000,
        'yearStart': 0,
        'yearEnd': 0,
        'part': 1,
        'typeSorting': 'year'
    }

    it(('Проверка возврата store при пустом action'), () => {
        const result = FilterSlice(undefined, { type: '' })
        expect(result).toEqual({ filterObj: initialFilterObj })
    })

    it(('Проверка возврата нужного id '), () => {
        const testObj = {
            'ratingStart': 77,
            'countRatingStart': 456,
            'yearStart': 1999,
            'yearEnd': 2190,
            'part': 3,
            'typeSorting': 'year'
        }
        const action = { type: getFilterObj.type, payload: testObj }
        const result = FilterSlice({ filterObj: initialFilterObj }, action)
        expect(result.filterObj).toBe(testObj)
    })
})