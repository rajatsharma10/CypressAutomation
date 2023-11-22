///<reference types="cypress" />
import BaseClass from'../Utilities/BaseClass.js';
import  LoginPage   from '../Object/LoginPage.js';



describe('LoginPage', function() {
    const log=new LoginPage();
    const GET=new BaseClass();

    it('Opening Url ', function() {

    cy.log('Getting the url') 
    GET.GetUrl();        

    cy.log('Checkning The login with valid userid and password')
    log.Login_with_Crediantals();
    cy.wait(5000)

    })

    it('Check With Invalid ', function() {
        cy.log('checking the Login with Invalid user')
        log.Invalid();
       
       })

    it('Login Again ', function() {

        cy.log('Logging IN')
        log.Login_with_Crediantals();    
        cy.viewport(window.screen.width, window.screen.height);


       })
})
    

 

