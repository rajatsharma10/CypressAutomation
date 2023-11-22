


class UpgradeNow{

    ClickingOnUpgradeNow(){
         
        cy.xpath("//a[@class='upgradebtn_head dropdown-toggle upgrade-btn btn']").click({ multiple: true })

        cy.log('Selected the monthly and Yearly') 
     
      // verify child window url
      cy.url() .should('include', 'https://server-acc.esignly.com/pricing')
    }                
    Check_Monthly_and_Yearly(){

        cy.xpath("//button[@class='tablinks']").click({multiple:true})
        cy.viewport(window.screen.width, window.screen.height);
     
    }
    Check_proffessional_10$(){
        cy.xpath("(//a[@class='btn btn-new purchase_plan_btn'])[3]").Click({force: true});                

    }   

}
export default UpgradeNow  