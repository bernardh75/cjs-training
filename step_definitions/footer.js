const { I, footerFragment } = inject();
let state = {};

Before(() => {
  state = {};
});

When('the user goes to the link in footer', async (dataTable) => {
  await footerFragment.goToFooterLink(dataTable, state);
});

Then('the user sees text content in the page', () => {
  footerFragment.validateContent(state);
});
