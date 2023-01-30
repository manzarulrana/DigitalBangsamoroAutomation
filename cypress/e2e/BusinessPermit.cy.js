import BusinessPermitCitizen from "../PageObjects/BusinessPermitCitizanPage";
import BusinessPermitnWorklfow from "../PageObjects/BusinessPermitWorkflowPage";

describe('Business Permit Registration and Renewal', () => {



    it ('Application submission', ()=> {

        cy.visit("https://citizen-dev.ph.orangebd.com/")

        cy.fixture('BusinessPermit').then((data) => {
           
            const bp=new BusinessPermitCitizen();
            bp.setSearch(data.service)
            cy.wait(3000)
            bp.clickSearchResult()
           // bp.verfiySearch()
        
        
            bp.clickApplyNow()
            cy.wait(3000)
        
            bp.setUserName(data.username)
            bp.setPassword(data.password)
            bp.clickLogin()
           // bp.verifyLogin()

            bp.clickApplyNow()
           
            bp.clickOfficeSelectionNext()
           
            bp.verifyApplyNow()

            bp.clickUploadFile1()
            bp.clickSelectFile1()

            bp.clickUploadFile2()
            bp.clickSelectFile1()

            bp.clickUploadFile3()
            bp.clickSelectFile3()

            bp.clickUploadFile4()
            bp.clickSelectFile3()

            cy.wait(3000)
        
            bp.clickNextAF()

            bp.setApplicationType(data.applicationtype)
            bp.setPaymentMode(data.paymentmode)
            bp.setOwnership(data.ownership)
            
            cy.wait(3000)

            bp.setMidleName(data.midlename)
            bp.clickMainOffice()
            bp.setBusinessAddress(data.businessaddress)

            bp.clickNextAR()
            bp.verifyApplicationReview
         
            bp.clickSubmit()
         
            cy.wait(8000)
         
            bp.verifySubmit()
        
        

        })  
    
        })

        it ('Application Processing', ()=> {

            cy.visit("https://workflow-dev.ph.orangebd.com/")
    
            cy.fixture('BusinessPermit').then((data) => {
               
                const wf=new BusinessPermitnWorklfow();

                
                // Desk-1: Noaima Mama //

                // Officer-1 Login

                wf.setOfficerID(data.officerid1)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()
                
                // Decision Window

                wf.clickDecision()
                wf.verifyDecisionWindow()
                wf.clickPaymentRequst()
                wf.setPaymentAmount(data.paymentamount)
                wf.clickSubmitDecision()
                cy.wait(6000)
                wf.verifyDetails()
                wf.clickDecision()
                wf.verifyDecisionWindow()
                wf.clickPaymentSuccess()
                cy.wait(6000)
                wf.setNote(data.note)
                wf.clickSubmitDecision()
                cy.wait(3000)
                wf.verifyDetails()

                // Forward Window
                
                cy.wait(3000)
                wf.clickForward()
                wf.verifyForwardWindow()
                wf.clickSultan()
                wf.clickSubmitForward()
                cy.wait(3000)
                wf.verifyForward()

                // Officer-1 Logout

                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()


                // Desk-2: Sultan Mesug Palawan //

                // Officer-2 Login

                wf.setOfficerID(data.officerid2)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()

                // Decision Window

                 wf.clickDecision()
                 wf.verifyDecisionWindow()
                 wf.clickProceed()
                 wf.setNote(data.note)
                 wf.clickSubmitDecision()
                 cy.wait(3000)
                 wf.verifySubmit()


                // Forward Window

                cy.wait(3000)
                wf.clickForward()
                wf.verifyForwardWindow()
                wf.clickPansar()
                wf.clickSubmitForward()
                cy.wait(3000)
                wf.verifyForward()


                // Officer-2 Logout

                cy.wait(3000)
                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()



                // Desk-3: Atty. Dimnatang BL Pansar //

                // Officer-3 Login

                wf.setOfficerID(data.officerid3)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()


                // Decision Window

                wf.clickDecision()
                wf.verifyDecisionWindow()
                wf.clickReject()
                wf.setNote(data.note)
                wf.clickSubmitDecision()
                cy.wait(3000)
                wf.verifySubmit()


                 // Officer-3 Logout

                 cy.wait(3000)
                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()


            })     
        
            })

    })
