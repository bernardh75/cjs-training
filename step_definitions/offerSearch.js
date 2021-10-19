const { I, offerSearchFragment } = inject();
let state = {};

Before(() => {
  state = {};
});

When('the user searches matches or competitions with invalid data', async (dataTable) => {
  await offerSearchFragment.typeInTheSearch(dataTable, state);
});

Then('the user founds no matches or competitions', () => {
  offerSearchFragment.validateContent(state);
});
