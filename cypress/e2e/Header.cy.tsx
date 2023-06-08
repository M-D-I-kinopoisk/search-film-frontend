describe('Header component', () => {
  beforeEach(() => {
    cy.viewport(1280,720)
    cy.visit('/')
  })

  // it('displays the correct logo', () => {
  //   cy.get('[class*=header__logo] img').should('have.attr', 'alt', 'ivi')
  // })

  // it('displays the correct user icon', () => {
  //   cy.get('[class*=header__btnUser]').should('have.attr', 'title', 'Войти в профиль')
  // })

  it('should show category drop-down on navigation hover', () => {
    cy.get('[class*=navbar__ul]').first().trigger('mouseover')
    cy.get('[class*=dropDown]').should('exist')
  })
})