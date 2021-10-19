const { I, mainPage, aboutPage, responsibleGamingPage, termsConditionsPage } = inject();

module.exports = {

    // locators

    // methods

    goToMainPage() {
        I.amOnPage(mainPage.mainPageUrl);
    }
}
