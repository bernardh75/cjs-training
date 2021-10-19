const { I, navigationFragment, cookiesFragment } = inject();
let state = {};

Before(() => {
  state = {};
});

Given('a user coming to Betclic', () => {
  navigationFragment.goToMainPage();
  cookiesFragment.rejectCookies();
});

