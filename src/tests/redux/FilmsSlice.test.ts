import { getFilmId, setOpenModal, getComment } from '../../redux/FilmsSlice';
import FilmsSlice from '../../redux/FilmsSlice';

describe('Проверка FilmsSlice', () => {
    const initialState = {
        filmId: null,
        modalOpen: {
            modalState: false,
            value: 'creators'
        },
        comment: {}
    }

    it(('Проверка возврата store при пустом action'), () => {
        const result = FilmsSlice(undefined, { type: '' })
        expect(result).toEqual(initialState)
    })

    it(('Проверка возврата нужного id '), () => {
        const action = { type: getFilmId.type, payload: '666' }
        const result = FilmsSlice(initialState, action)
        expect(result.filmId).toBe('666')
    })

    it(('Проверка возврата нужного комментария '), () => {
        const testComment = { id: 1, value: 'Комментарий' }
        const action = { type: getComment.type, payload: testComment }
        const result = FilmsSlice(initialState, action)
        expect(result.comment).toBe(testComment)
    })

    it(('Проверка открытия модального окна'), () => {
        const modalOpen = { modalState: true, value: 'comments' }
        const action = { type: setOpenModal.type, payload: modalOpen }
        const result = FilmsSlice(initialState, action)
        expect(result.modalOpen.value).toBe('comments')
    })
})