export const funcDeclination = (number, words) => {
    let index = 0
    if (number % 100 >= 11 && number % 100 <= 19) {
        index = 2
    } else if (number % 10 === 1) {
        index = 0
    } else if (number % 10 >= 2 && number % 10 <= 4) {
        index = 1
    } else {
        index = 2
    }
    return number + ' ' + words[index]

}