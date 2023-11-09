/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://social-idols.verzview.com/')
  })
})
*/
import {AuthPage, MainPage} from '../pages'
import user from '../fixtures/user.json'
import error from '../fixtures/errors.json'

describe('Authentication Test', () => {
  beforeEach(() => {
    AuthPage.open()
  })

  it('With existing credentials', () => {
    AuthPage.logIn(user.username, user.password)
    
  })

  it('With non-existing credentials', () => {
    AuthPage.logIn('admin1', '123456')
    AuthPage.containerError.contains(error.credentials)
  })
it('create admin account',()=>{
  AuthPage.logIn(user.username, user.password)
  
})
  
})
