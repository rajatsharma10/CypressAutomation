

class LoginPage {
   
  
    Login_with_Crediantals()
    {
       cy.fixture("example").then((Enter_Email_Password)=>{
       cy.get("#LoginForm_email").type(Enter_Email_Password.LoginCrediantal[0]['Email'])
       cy.get('#LoginForm_password').type(Enter_Email_Password.LoginCrediantal[0]['Password'])
       cy.xpath("//button[text()='Log In']").click();
       cy.title().should('eq',':: eSignly | Esign digital signature - Site ::')

    })

    }

    Invalid(){
          cy.fixture("example").then((Enter_Invalid_Email_Password)=>{
            cy.xpath("//div[@class='dropdown-toggle userToggleButton udIn']").click();
            cy.xpath("//a[@title='Logout']").click();
            cy.wait(10000)
            cy.get("#LoginForm_email").type(Enter_Invalid_Email_Password.LoginCrediantal[0]['InValid_Email'])
            cy.get('#LoginForm_password').type(Enter_Invalid_Email_Password.LoginCrediantal[0]['Invalid_Password'])
            cy.xpath("//button[text()='Log In']").click();     

            cy.xpath("(//div[@class='submit-msg']/span)[1]").should(($div) => {  
                const text = $div.text()
                expect(text).to.include('Invalid Email id or Password.')
                            
              })
              cy.get("#LoginForm_email").clear();
              cy.get('#LoginForm_password').clear();
        })
    }


}

    export default LoginPage