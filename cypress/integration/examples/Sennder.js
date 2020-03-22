/// <reference types="Cypress" />

describe('Sprint Dashboard Automation with Cypress', function()
    {
        it('Perform user action on Sprint Dashboard interface', function()
        {

            // Launch the browser and go to the Sprint Dashboard Site
            cy.visit("https://sprintboards.io/auth/login"); 

            // Type "sennderqa@gmail.com" in “Email Address” field
            cy.get(".form-control[type='email']").type("sennderqa3@gmail.com")

            // Type "n*H7A7f@&ikbwu" as password in "Password" field
            cy.get(".form-control[type='password']").type("n*H7A7f@&ikbwu")

            // Click "Login" button to perform login action to the dashboard
            cy.get(".btn-primary[type='submit'][type='submit']").click()

            // Added a sleep time to prevent timeout during login process
            cy.wait(5000)

            //Click “CREATE BOARD” on the main dashboard
            cy.get("#navbar > ul > li:nth-child(1) > a").click()

            //Verify if link is correct with this : "https://sprintboards.io/boards/create"
            cy.url().should('eq','https://sprintboards.io/boards/create')

            // Verify if title present is correct
            cy.get(".text-center").contains("Create a Board")
            
            //Type “My first board” in “Session Name” field
            cy.get(".form-control[type='text']").type("My first board")

            // Select Owner
            cy.get(".custom-select").first().select('Sennder')

            //Scroll down to find "Create Board" button and click “Create Board” button
            cy.scrollTo('bottom').get(".btn-primary[type='submit']").click()

            // Verification link present in this moment
            cy.url().should('include',"https://sprintboards.io/boards")

            //Added a sleep time to prevent timeout
            cy.wait(5000)

            // Click green “+” button 
            cy.get(".fa-plus-square").first().click()

            // Validation step of Popup Card title, should be "Add a Card"
            cy.get("#add-card-modal").contains("Add a Card")
            
            // Define locator for title and type “Goal was achieved” as title
            cy.get("p.mb-0 > input").click({force: true}).type("Goal was achieved")

            //Type “Sprint was well planned” as description
            cy.get('textarea').type("Sprint was well planned",{force:true})


            //Click “Add Card” button
            cy.get(".btn-success[type='submit']").click()

            // Added a sleep time to prevent timeout
            cy.wait(5000)

            // Verify if Card is added with correct name and description
            // Verify if Header contains correct title : "Goal was achieved"
            cy.get(".card-header").contains("Goal was achieved")
            // Verify if Description contains correct string information : "Sprint was well planned"
            cy.get(".card-body").contains("Sprint was well planned")


            //Click red “+” button
            //cy.get(".text-danger[type='button']").click()
            cy.get(".fa-plus-square").eq(1).click()

            cy.wait(3000)

            // Validation step of Popup Card title, should be "Add a Card"
            cy.get("#add-card-modal").contains("Add a Card")

            // Define locator for title and type “Goal was not achieved” as title
            cy.get("p.mb-0 > input").type("Goal was not achieved")

            //Click “Add Card” button
            cy.get(".btn-danger[type='submit']").click()

            // Click "thumbs up" icon for the card in the first column
            cy.get(".fa-thumbs-up").first().click()

            // Check if “Likes” count goes from 0 to 1
            //cy.get(".btn-link[type='button']").contains("1")
            cy.get(".ml-3").contains("1")
            
            //Click “x Delete” button from the card in the second column
            //cy.get(".btn-link[type='button']").eq(1).click()
            cy.get(".fa-times-circle").last().click()
            
            cy.wait(3000)

            // Verify if present modal appeared contains correct information
            cy.get(".modal-header").contains("Delete Card")
            cy.get(".modal-body").contains("Are you sure you want to continue?")

            // Click “Confirm” button, in order to delete second card registered
            cy.get(".btn-danger").click()

        }
        )
    }

)