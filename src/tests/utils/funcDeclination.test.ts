import { funcDeclination } from '../../utils/funcDeclination'

describe('funcDeclination', () => {
  it('should return correct declination for "фильм"', () => {
    expect(funcDeclination(1, ['фильм', 'фильма', 'фильмов'])).toEqual('1 фильм')
    expect(funcDeclination(2, ['фильм', 'фильма', 'фильмов'])).toEqual('2 фильма')
    expect(funcDeclination(5, ['фильм', 'фильма', 'фильмов'])).toEqual('5 фильмов')
    expect(funcDeclination(11, ['фильм', 'фильма', 'фильмов'])).toEqual('11 фильмов')
    expect(funcDeclination(21, ['фильм', 'фильма', 'фильмов'])).toEqual('21 фильм')
  })

  it('should return correct declination for "комментарий"', () => {
    expect(funcDeclination(1, ['комментарий', 'комментария', 'комментариев'])).toEqual('1 комментарий')
    expect(funcDeclination(2, ['комментарий', 'комментария', 'комментариев'])).toEqual('2 комментария')
    expect(funcDeclination(5, ['комментарий', 'комментария', 'комментариев'])).toEqual('5 комментариев')
    expect(funcDeclination(11, ['комментарий', 'комментария', 'комментариев'])).toEqual('11 комментариев')
    expect(funcDeclination(21, ['комментарий', 'комментария', 'комментариев'])).toEqual('21 комментарий')
  })
})