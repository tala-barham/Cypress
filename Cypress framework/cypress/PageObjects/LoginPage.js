class Login{
    txtEmail='input[name="username"]';
    txtPassword='input[name="authPwd"]';
    btnContinue='button.blueFill.rbButtonComponent[aria-disabled="false"]';
    btnSubmit='button.blueFill[aria-disabled="false"]';

    setEmailAddress(email){
    cy.get(this.txtEmail).type(email);
    }
    clickContinue(){
    cy.get(this.btnContinue).click(); 
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password);
        }
    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }    
}
export default Login;
