import { getFilterTextObj } from '../../redux/FilterTextSlice';
import FilterTextSlice from '../../redux/FilterTextSlice';

describe('Проверка FilterTextSlice', () => {
    it(('Проверка возврата store при пустом action'), () => {
        const result = FilterTextSlice(undefined, { type: '' })
        expect(result).toEqual({ filterTextObj: {} })
    })

    it(('Проверка возврата нужного id '), () => {
        const testObj = { id: 1, testValue: 'test' }
        const action = { type: getFilterTextObj.type, payload: testObj }
        const result = FilterTextSlice({ filterTextObj: {} }, action)
        expect(result.filterTextObj).toBe(testObj)
    })
})