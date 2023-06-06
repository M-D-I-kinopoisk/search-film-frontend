import { toggle } from '../../redux/AuthToggleSlice';
import AuthToggleSlice from '../../redux/AuthToggleSlice';

describe('Проверка FilmsSlice', () => {
    const initialState = {
        auth: {
            registration: false,
            authorization: false
        }
    }

    it(('Проверка возврата store при пустом action'), () => {
        const result = AuthToggleSlice(undefined, { type: '' })
        expect(result).toEqual(initialState)
    })

    it(('Проверка возврата нужного id '), () => {
        const action = { type: toggle.type, payload: true }
        const result = AuthToggleSlice(initialState, action)
        expect(result.auth).toBe(true)
    })
})