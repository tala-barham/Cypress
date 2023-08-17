import Login from "../PageObjects/LoginPage.js";

describe('Rainbow Website Login Test', ()=>{
  it.only('ValidLogin',()=>{
      cy.visit("https://web.openrainbow.net/rb/2.125.2/index.html#/login");
      cy.fixture('Login.json').then((data) => {
      const ln=new Login();
      ln.setEmailAddress(data.validUser.email)
      ln.clickContinue();
      ln.setPassword(data.validUser.password)
      ln.clickSubmit();
    })
    })
  })