// source for GPT query 


describe('03 :: Check BACH Backoffice :: ARTICLE :: SCHEDULED', () => {
  it('schedules an article', () => {
    cy.log('--- going to schedule article with ' + globalVariables.RandomString)

    if (globalValues.TITLE_LABEL_WEBSITE === 'Go to the site FRANCE24 EN') {
      cy.log('\n--- FRANCE24')
      
      cy.get('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
        .then(resultItem => {
          cy.log('--- listing should contain ' + globalVariables.RandomString + ' in ' + resultItem)
          cy.log('\n--- Edit content', 'red')
          cy.click('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
          cy.wait(5)
        })
    } else if (globalValues.TITLE_LABEL_WEBSITE === 'Aller sur le site MCD AR') {
      cy.log('\n--- MCD')
      cy.get('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
        .then(resultItem => {
          cy.log('--- listing should contain ' + globalVariables.RandomString + ' in ' + resultItem)
          cy.log('\n--- Edit content', 'red')
          cy.click('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
          cy.wait(5)
        })
    } else if (globalValues.TITLE_LABEL_WEBSITE === 'Aller sur le site RFI FR') {
      cy.log('\n--- RFI FR')
      cy.get('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
        .then(resultItem => {
          cy.log('--- listing should contain ' + globalVariables.RandomString + ' in ' + resultItem)
          cy.log('\n--- Edit content', 'red')
          cy.click('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
          cy.wait(5)
        })
    } else if (globalValues.TITLE_LABEL_WEBSITE === 'Go to the site OBSERVERS EN') {
      cy.log('\n--- OBSERVERS')
      cy.log('--- xpath specific for OBS', 'red')
      cy.get('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
        .then(resultItem => {
          cy.log('--- listing should contain ' + globalVariables.RandomString + ' in ' + resultItem)
          cy.log('\n--- Edit content', 'red')
          cy.click('#DataTables_Table_1 tbody tr td.text-center.text-nowrap #edit-content-btn--0')
          cy.wait(5)
        })
      } else {
            cy.log('\n--- RFI ES')
            // to be continued
      
      } 

            // GPT stop here, lazy bitch


// THE MOST DIFFICULT PART OF THE TESTING SCRIPT
Cypress.Commands.add('fillArticleTitle', () => {
cy.get('#article_title').type('SCHEDULED ' + new Date().toLocaleDateString() + ' Test Article title CodeceptJS');
});

Cypress.Commands.add('clickScheduledRadioButton', () => {
cy.get('#radio-SCHEDULED').click();
});

Cypress.Commands.add('fillScheduledDate', () => {
cy.get('#scheduledDateInput').type(new Date().toLocaleDateString());
});

Cypress.Commands.add('fillScheduledHour', () => {
let currentHour = new Date().getHours();
let currentMinutes = new Date().getMinutes();
let nextMinutes = currentMinutes + 5;
if (nextMinutes >= 60) {
nextMinutes = nextMinutes % 60;
currentHour += 1;
}
cy.get('#scheduledHourInput').type(currentHour + ':' + nextMinutes);
});

Cypress.Commands.add('fillArticleTitle', () => {
cy.fillArticleTitle();
cy.clickScheduledRadioButton();
cy.wait(5);
cy.fillScheduledDate();
cy.fillScheduledHour();
});