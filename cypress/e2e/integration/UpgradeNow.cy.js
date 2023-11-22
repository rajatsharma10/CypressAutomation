
import UpgradeNow from '../Object/UpgradeNow.js';
import LoginPage from '../integration/LoginPage.cy.js'

describe('Upgrade', function() {
    const up=new UpgradeNow(); 
 
   it('Clicking on Upgrade', function() {

    cy.log('Check the UpgrateNow Button') 
    
     up.ClickingOnUpgradeNow();

    })
    it('Check Monthly and Yearly', function() {

       up.Check_Monthly_and_Yearly();

         
      })
      it('Check Proffessional Plan of 10 $', function() {

        up.Check_proffessional_10$();
 
          
       })
})