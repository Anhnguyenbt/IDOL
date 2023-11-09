import Page from './page'

export const AuthPage = new class extends Page {
  get inputUsername()  {return cy.get('[id="adminloginform-username"]')}
  get inputPassword()  {return cy.get('[id="adminloginform-password"]')}
  get checkboxremember()    {return cy.get('[class="custom-control-label"]')}
  get btnsubmit()    {return cy.get('[class="btn btn-primary btn-lg btn-shadow"]')}
  get containerError() {return cy.get('[class="help-block help-block-error"]')}

  open() {
    return super.open('/')
  }

  logIn(username, password) {
    this.inputUsername.type(username)
    this.inputPassword.type(password)
    this. checkboxremember.click()
    this.btnsubmit.click();
  }

}