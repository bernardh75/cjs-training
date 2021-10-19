/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type mainPage = typeof import('./pages/main.js');
type navigationFragment = typeof import('./fragments/navigation.js');
type cookiesFragment = typeof import('./fragments/cookies.js');
type offerSearchFragment = typeof import('./fragments/offerSearch.js');
type footerFragment = typeof import('./fragments/footer.js');
type aboutPage = typeof import('./pages/about.js');
type responsibleGamingPage = typeof import('./pages/responsibleGaming.js');
type termsConditionsPage = typeof import('./pages/termsConditions.js');
declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    mainPage: mainPage,
    navigationFragment: navigationFragment,
    cookiesFragment: cookiesFragment,
    offerSearchFragment: offerSearchFragment,
    footerFragment: footerFragment,
    aboutPage: aboutPage,
    responsibleGamingPage: responsibleGamingPage,
    termsConditionsPage : termsConditionsPage,
  }
  interface Methods extends Playwright { }
  interface I extends ReturnType<steps_file> { }
  namespace Translation {
    interface Actions { }
  }
}
