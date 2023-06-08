describe('NavBar component', () => {
  beforeEach(() => {
    cy.viewport(1280,720)
    cy.visit('/')
  })
  const firstSeletor = '[class*=navbar__li]:first-child [class*=navbar__a]'
  const secondSeletor = '[class*=navbar__li]:nth-child(2) [class*=navbar__a]'
  const thirdSeletor = '[class*=navbar__li]:nth-child(3) [class*=navbar__a]'
  const fourSeletor = '[class*=navbar__li]:nth-child(4) [class*=navbar__a]'
  const fifthSeletor = '[class*=navbar__li]:nth-child(5) [class*=navbar__a]'
  const lastSeletor = '[class*=navbar__li]:last-child [class*=navbar__a]'

  // it('displays the correct title links', () => {
  //   cy.get(firstSeletor).should('have.text', 'Мой Иви')
  //   cy.get(secondSeletor).should('have.text', 'Что нового')
  //   cy.get(thirdSeletor).should('have.text', 'Фильмы')
  //   cy.get(fourSeletor).should('have.text', 'Сериалы')
  //   cy.get(fifthSeletor).should('have.text', 'Мультфильмы')
  //   cy.get(lastSeletor).should('have.text', 'TV+')
  // })

  // it('navigates to the correct page when the first link is clicked', () => {
  //   cy.get(firstSeletor).click()
  //   cy.url().should('eq', Cypress.config().baseUrl + '/')
  // })

  it('navigates to the correct page when the third link is clicked', () => {
    cy.get(thirdSeletor).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/movies')
  })
})