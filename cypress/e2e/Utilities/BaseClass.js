class BaseClass{

    GetUrl() {

         cy.fixture("example").then((Login_Data)=>{ 

         cy.visit(Login_Data.URL[0]['url'])
         
         cy.viewport(window.screen.width, window.screen.height);
        
         cy.title().should('eq','Log In Now For eSignature Solution | eSignly')
    })
}

}
 export default BaseClass